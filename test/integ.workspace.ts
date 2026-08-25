/**
 * Integration test for the `Workspace` construct.
 *
 * This follows the aws-cdk core convention for integration tests: an `integ.*.ts` entry point that
 * builds one or more real stacks and wraps them in an `IntegTest` from `@aws-cdk/integ-tests-alpha`.
 *
 * Dependency-free by design: both workspaces declare `SAML` as the authentication provider but
 * supply no `samlConfiguration`, so they are created as "SAML / NOT_CONFIGURED". That avoids the
 * only external prerequisites the service would otherwise impose — IAM Identity Center (needed for
 * `AWS_SSO`) and a reachable/valid external SAML IdP. Every other resource (IAM role, VPC, security
 * group, EC2 managed prefix list) is created within the stack, so the only things a deploy needs are
 * AWS credentials, a Region where Amazon Managed Grafana is available, and a one-time
 * `cdk bootstrap` — nothing configured out-of-band.
 *
 * Running it (and committing the synthesized snapshot under `test/integ.workspace.js.snapshot/`)
 * deploys to a real AWS account via integ-runner, e.g.:
 *
 *   npx @aws-cdk/integ-runner@latest --language typescript --update-on-failed --directory test
 *
 * Note: @aws-cdk/integ-runner uses the CLI-style version line (e.g. 2.204.x), which is independent
 * of the aws-cdk-lib 2.266 numbering — pin @latest rather than @^2.266.
 *
 * That deploy-backed snapshot is intentionally NOT generated in this environment because it has no
 * AWS account. Jest does not execute this file — the project's `testMatch` only picks up
 * `*.test.ts` / `*.spec.ts` — so here it participates in compilation/lint only.
 */
import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { PrefixList, SecurityGroup, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import {
  AccountAccessType,
  AuthenticationProviders,
  PermissionTypes,
  Workspace,
} from '../src';

const app = new App();

/**
 * Case (a): a minimal CUSTOMER_MANAGED workspace with a service role. SAML is declared as the auth
 * provider but left unconfigured, so no IAM Identity Center or IdP is required.
 */
const minimalStack = new Stack(app, 'grafana-workspace-minimal-integ');

const minimalRole = new Role(minimalStack, 'WorkspaceRole', {
  assumedBy: new ServicePrincipal('grafana.amazonaws.com'),
});

new Workspace(minimalStack, 'Workspace', {
  accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
  authenticationProviders: [AuthenticationProviders.SAML],
  permissionType: PermissionTypes.CUSTOMER_MANAGED,
  name: 'minimal-integ-workspace',
  role: minimalRole,
});

/**
 * Case (b): a workspace exercising `vpcConfiguration` and `networkAccessControl`, again with SAML
 * left unconfigured. Network access control uses an EC2 managed prefix list (an IP allow-list) —
 * a valid, self-contained input that also exercises the `prefixLists -> PrefixListIds` mapping.
 */
const networkStack = new Stack(app, 'grafana-workspace-network-integ');

const networkRole = new Role(networkStack, 'WorkspaceRole', {
  assumedBy: new ServicePrincipal('grafana.amazonaws.com'),
});

// Isolated subnets need no NAT gateway (no cost, no egress dependency) yet still satisfy the
// Grafana VPC requirement of 2-6 subnets. A default VPC with `natGateways: 0` yields no usable
// private subnets, so the subnet layout is defined explicitly.
const vpc = new Vpc(networkStack, 'Vpc', {
  maxAzs: 2,
  natGateways: 0,
  subnetConfiguration: [
    { name: 'isolated', subnetType: SubnetType.PRIVATE_ISOLATED, cidrMask: 24 },
  ],
});

const securityGroup = new SecurityGroup(networkStack, 'WorkspaceSg', { vpc });

const allowList = new PrefixList(networkStack, 'AllowList', {
  maxEntries: 1,
  entries: [{ cidr: '10.0.0.0/8', description: 'integ allow-list' }],
});
allowList.applyRemovalPolicy(RemovalPolicy.DESTROY);

new Workspace(networkStack, 'Workspace', {
  accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
  authenticationProviders: [AuthenticationProviders.SAML],
  permissionType: PermissionTypes.CUSTOMER_MANAGED,
  name: 'network-integ-workspace',
  role: networkRole,
  vpcConfiguration: {
    securityGroups: [securityGroup],
    subnets: vpc.isolatedSubnets,
  },
  networkAccessControl: {
    prefixLists: [allowList],
  },
});

const integ = new IntegTest(app, 'grafana-workspace-integ', {
  testCases: [minimalStack, networkStack],
});

// A trivial deploy-time assertion. Besides sanity-checking credentials, it ensures the IntegTest's
// DeployAssert stack contains at least one resource — an empty stack fails CloudFormation template
// validation ("Resources section must exist and be non-empty"), which integ-runner treats as an
// error.
integ.assertions.awsApiCall('STS', 'getCallerIdentity');

app.synth();

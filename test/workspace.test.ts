import { ArnFormat, Fn, Lazy, Stack, Tags, Token } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import {
  GatewayVpcEndpoint,
  GatewayVpcEndpointAwsService,
  IPrefixList,
  ISecurityGroup,
  ISubnet,
  IVpcEndpoint,
  PrefixList,
  SecurityGroup,
  Subnet,
  Vpc,
} from 'aws-cdk-lib/aws-ec2';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import {
  AccountAccessType,
  AuthenticationProviders,
  IWorkspace,
  NotificationDestinations,
  PermissionTypes,
  Workspace,
  WorkspaceProps,
} from '../src';

let stack: Stack;
let role: Role;
let vpc: Vpc;

beforeEach(() => {
  stack = new Stack(undefined, undefined, {
    env: { account: '123456789012', region: 'us-east-1' },
  });
  role = new Role(stack, 'GrafanaWorkspaceRole', {
    assumedBy: new ServicePrincipal('grafana.amazonaws.com'),
    description: 'Role for Amazon Managed Grafana Workspace',
  });
  vpc = new Vpc(stack, 'Vpc');
});

/**
 * Minimal set of required props for a workspace, layered on top of a `role`. Individual tests
 * spread additional properties on top of this base.
 */
function baseProps(): WorkspaceProps {
  return {
    accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
    authenticationProviders: [AuthenticationProviders.AWS_SSO],
    permissionType: PermissionTypes.CUSTOMER_MANAGED,
    role,
  };
}

function makeSecurityGroups(count: number): ISecurityGroup[] {
  return Array.from({ length: count }, (_, i) => new SecurityGroup(stack, `Sg${i}`, { vpc }));
}

function makeSubnets(count: number): ISubnet[] {
  return Array.from({ length: count }, (_, i) =>
    new Subnet(stack, `Subnet${i}`, {
      availabilityZone: vpc.availabilityZones[0],
      cidrBlock: `10.1.${i}.0/24`,
      vpcId: vpc.vpcId,
    }),
  );
}

function makePrefixLists(count: number): IPrefixList[] {
  return Array.from({ length: count }, (_, i) => new PrefixList(stack, `Pl${i}`));
}

function makeVpcEndpoints(count: number): IVpcEndpoint[] {
  return Array.from({ length: count }, (_, i) =>
    new GatewayVpcEndpoint(stack, `Vpce${i}`, {
      service: GatewayVpcEndpointAwsService.DYNAMODB,
      vpc,
    }),
  );
}

describe('Workspace', () => {
  describe('constructor', () => {
    test('creates a workspace with a full set of properties', () => {
      // GIVEN
      const securityGroup = new SecurityGroup(stack, 'Sg', { vpc });

      // WHEN
      new Workspace(stack, 'Workspace', {
        accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
        authenticationProviders: [AuthenticationProviders.AWS_SSO, AuthenticationProviders.SAML],
        permissionType: PermissionTypes.CUSTOMER_MANAGED,
        clientToken: 'testtoken',
        dataSources: ['CLOUDWATCH', 'PROMETHEUS'],
        description: 'my Grafana workspace',
        grafanaVersion: '10.4',
        name: 'myWorkspace',
        notificationDestinations: [NotificationDestinations.SNS],
        organizationRoleName: 'GrafanaOrgRole',
        pluginAdminEnabled: true,
        stackSetName: 'my-stack-set',
        role,
        samlConfiguration: {
          allowedOrganizations: ['org1', 'org2'],
          assertionAttributes: {
            email: 'email',
            groups: 'groups',
            login: 'login',
            name: 'name',
            org: 'org',
            role: 'role',
          },
          idpMetadata: {
            url: 'https://example.com',
            xml: '<xml></xml>',
          },
          loginValidityDuration: 42,
          roleValues: {
            admin: ['adm1', 'adm2'],
            editor: ['edt1', 'edt2'],
          },
        },
        vpcConfiguration: {
          securityGroups: [securityGroup],
          subnets: vpc.privateSubnets,
        },
      });

      // THEN
      const template = Template.fromStack(stack);
      template.resourceCountIs('AWS::Grafana::Workspace', 1);
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        AccountAccessType: 'CURRENT_ACCOUNT',
        AuthenticationProviders: ['AWS_SSO', 'SAML'],
        PermissionType: 'CUSTOMER_MANAGED',
        ClientToken: 'testtoken',
        DataSources: ['CLOUDWATCH', 'PROMETHEUS'],
        Description: 'my Grafana workspace',
        GrafanaVersion: '10.4',
        Name: 'myWorkspace',
        NotificationDestinations: ['SNS'],
        OrganizationRoleName: 'GrafanaOrgRole',
        PluginAdminEnabled: true,
        StackSetName: 'my-stack-set',
        SamlConfiguration: {
          AllowedOrganizations: ['org1', 'org2'],
          AssertionAttributes: {
            Email: 'email',
            Groups: 'groups',
            Login: 'login',
            Name: 'name',
            Org: 'org',
            Role: 'role',
          },
          IdpMetadata: {
            Url: 'https://example.com',
            Xml: '<xml></xml>',
          },
          LoginValidityDuration: 42,
          RoleValues: {
            Admin: ['adm1', 'adm2'],
            Editor: ['edt1', 'edt2'],
          },
        },
      });
    });

    test('creates a workspace with the minimal set of required properties', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
        authenticationProviders: [AuthenticationProviders.AWS_SSO],
        permissionType: PermissionTypes.CUSTOMER_MANAGED,
        role,
      });

      // THEN
      const template = Template.fromStack(stack);
      template.resourceCountIs('AWS::Grafana::Workspace', 1);
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        AccountAccessType: 'CURRENT_ACCOUNT',
        AuthenticationProviders: ['AWS_SSO'],
        PermissionType: 'CUSTOMER_MANAGED',
      });
      // No tags are rendered when none are supplied.
      template.hasResourceProperties('AWS::Grafana::Workspace', Match.not(Match.objectLike({
        Tags: Match.anyValue(),
      })));
    });

    test('wires the workspace role ARN through to RoleArn', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', baseProps());

      // THEN
      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        RoleArn: stack.resolve(role.roleArn),
      });
    });

    test('does not render optional properties that were not supplied', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', baseProps());

      // THEN
      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Grafana::Workspace', Match.not(Match.objectLike({
        SamlConfiguration: Match.anyValue(),
      })));
      template.hasResourceProperties('AWS::Grafana::Workspace', Match.not(Match.objectLike({
        VpcConfiguration: Match.anyValue(),
      })));
    });

    test('synthesizes without throwing for a tokenized or over-long name', () => {
      // GIVEN
      // Schema-shaped constraints (length, pattern) are deferred to CloudFormation's
      // pre-deployment validation and must not throw at synth time. Tokenized values are
      // unresolved at synth, so a construct-level length/regex check would be token-unsafe.

      // WHEN / THEN
      expect(() => {
        new Workspace(stack, 'TokenNameWorkspace', {
          ...baseProps(),
          name: Lazy.string({ produce: () => 'resolved-name' }),
        });
        new Workspace(stack, 'LongNameWorkspace', {
          ...baseProps(),
          name: 'r'.repeat(256),
        });
        Template.fromStack(stack);
      }).not.toThrow();
    });
  });

  describe('accountAccessType and permissionType variants', () => {
    interface Variant {
      readonly label: string;
      readonly props: () => WorkspaceProps;
      readonly expected: Record<string, unknown>;
    }

    const variants: Variant[] = [
      {
        label: 'CURRENT_ACCOUNT with a role',
        props: () => ({
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
        }),
        expected: {
          AccountAccessType: 'CURRENT_ACCOUNT',
          PermissionType: 'CUSTOMER_MANAGED',
        },
      },
      {
        label: 'ORGANIZATION with organizationalUnits and organizationRoleName',
        props: () => ({
          accountAccessType: AccountAccessType.ORGANIZATION,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.SERVICE_MANAGED,
          organizationalUnits: ['ou-abcd-12345678'],
          organizationRoleName: 'GrafanaOrgRole',
        }),
        expected: {
          AccountAccessType: 'ORGANIZATION',
          PermissionType: 'SERVICE_MANAGED',
          OrganizationalUnits: ['ou-abcd-12345678'],
          OrganizationRoleName: 'GrafanaOrgRole',
        },
      },
    ];

    test.each(variants.map((v) => [v.label, v] as const))('%s', (_label, variant) => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', variant.props());

      // THEN
      const template = Template.fromStack(stack);
      template.resourceCountIs('AWS::Grafana::Workspace', 1);
      template.hasResourceProperties('AWS::Grafana::Workspace', variant.expected);
    });
  });

  describe('authenticationProviders', () => {
    const cases: ReadonlyArray<readonly [string, AuthenticationProviders[]]> = [
      ['AWS_SSO', [AuthenticationProviders.AWS_SSO]],
      ['SAML', [AuthenticationProviders.SAML]],
      ['AWS_SSO and SAML', [AuthenticationProviders.AWS_SSO, AuthenticationProviders.SAML]],
    ];

    test.each(cases)('renders %s', (_label, providers) => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        authenticationProviders: providers,
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        AuthenticationProviders: providers,
      });
    });
  });

  describe('optional scalar and list properties', () => {
    test('renders notificationDestinations', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        notificationDestinations: [NotificationDestinations.SNS],
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        NotificationDestinations: ['SNS'],
      });
    });

    test('renders dataSources', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        dataSources: ['CLOUDWATCH', 'PROMETHEUS'],
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        DataSources: ['CLOUDWATCH', 'PROMETHEUS'],
      });
    });

    test('renders pluginAdminEnabled', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        pluginAdminEnabled: true,
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        PluginAdminEnabled: true,
      });
    });

    test('renders clientToken, description, grafanaVersion, name and stackSetName', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        clientToken: 'a-valid-token_123',
        description: 'A Grafana workspace',
        grafanaVersion: '10.4',
        name: 'my-workspace_1.0~test',
        stackSetName: 'my-stack-set',
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        ClientToken: 'a-valid-token_123',
        Description: 'A Grafana workspace',
        GrafanaVersion: '10.4',
        Name: 'my-workspace_1.0~test',
        StackSetName: 'my-stack-set',
      });
    });
  });

  describe('samlConfiguration', () => {
    test('renders a minimal SAML configuration (idpMetadata only)', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        authenticationProviders: [AuthenticationProviders.SAML],
        samlConfiguration: {
          idpMetadata: { url: 'https://example.com/metadata' },
        },
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        SamlConfiguration: {
          IdpMetadata: { Url: 'https://example.com/metadata' },
        },
      });
    });

    test('renders a full SAML configuration', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        authenticationProviders: [AuthenticationProviders.SAML],
        samlConfiguration: {
          allowedOrganizations: ['org1', 'org2'],
          assertionAttributes: {
            email: 'email',
            groups: 'groups',
            login: 'login',
            name: 'name',
            org: 'org',
            role: 'role',
          },
          idpMetadata: {
            url: 'https://example.com/metadata',
            xml: '<xml></xml>',
          },
          loginValidityDuration: 42,
          roleValues: {
            admin: ['adm1', 'adm2'],
            editor: ['edt1', 'edt2'],
          },
        },
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        SamlConfiguration: {
          AllowedOrganizations: ['org1', 'org2'],
          AssertionAttributes: {
            Email: 'email',
            Groups: 'groups',
            Login: 'login',
            Name: 'name',
            Org: 'org',
            Role: 'role',
          },
          IdpMetadata: {
            Url: 'https://example.com/metadata',
            Xml: '<xml></xml>',
          },
          LoginValidityDuration: 42,
          RoleValues: {
            Admin: ['adm1', 'adm2'],
            Editor: ['edt1', 'edt2'],
          },
        },
      });
    });

    test('maps the correctly-spelled assertionAttributes onto the template', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        authenticationProviders: [AuthenticationProviders.SAML],
        samlConfiguration: {
          idpMetadata: { url: 'https://example.com' },
          assertionAttributes: {
            email: 'correct-email',
          },
        },
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        SamlConfiguration: Match.objectLike({
          AssertionAttributes: {
            Email: 'correct-email',
          },
        }),
      });
    });
  });

  describe('vpcConfiguration', () => {
    const cases: ReadonlyArray<readonly [string, number, number]> = [
      ['minimum bounds (1 security group, 2 subnets)', 1, 2],
      ['maximum bounds (5 security groups, 6 subnets)', 5, 6],
    ];

    test.each(cases)('renders %s', (_label, sgCount, subnetCount) => {
      // GIVEN
      const securityGroups = makeSecurityGroups(sgCount);
      const subnets = makeSubnets(subnetCount);

      // WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        vpcConfiguration: { securityGroups, subnets },
      });

      // THEN
      const template = Template.fromStack(stack);
      template.resourceCountIs('AWS::Grafana::Workspace', 1);
      // Security group and subnet ids resolve to CloudFormation tokens (Ref/GetAtt), so assert the
      // shape and cardinality rather than concrete string ids.
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        VpcConfiguration: {
          SecurityGroupIds: Match.arrayWith(
            securityGroups.map((sg) => stack.resolve(sg.securityGroupId)),
          ),
          SubnetIds: Match.arrayWith(subnets.map((s) => stack.resolve(s.subnetId))),
        },
      });
    });
  });

  describe('networkAccessControl', () => {
    test('renders prefixLists as PrefixListIds', () => {
      // GIVEN
      const prefixLists = makePrefixLists(2);

      // WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        networkAccessControl: { prefixLists },
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        NetworkAccessControl: {
          PrefixListIds: prefixLists.map((pl) => stack.resolve(pl.prefixListId)),
          // No VPC endpoints supplied, so VpceIds is not rendered.
          VpceIds: Match.absent(),
        },
      });
    });

    test('renders vpcEndpoints as VpceIds', () => {
      // GIVEN
      const vpcEndpoints = makeVpcEndpoints(2);

      // WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        networkAccessControl: { vpcEndpoints },
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        NetworkAccessControl: {
          PrefixListIds: Match.absent(),
          VpceIds: vpcEndpoints.map((ve) => stack.resolve(ve.vpcEndpointId)),
        },
      });
    });

    test('renders both prefixLists and vpcEndpoints', () => {
      // GIVEN
      const prefixLists = makePrefixLists(2);
      const vpcEndpoints = makeVpcEndpoints(2);

      // WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        networkAccessControl: { prefixLists, vpcEndpoints },
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        NetworkAccessControl: {
          PrefixListIds: prefixLists.map((pl) => stack.resolve(pl.prefixListId)),
          VpceIds: vpcEndpoints.map((ve) => stack.resolve(ve.vpcEndpointId)),
        },
      });
    });

    test('preserves empty arrays as "allow none" (deny all traffic)', () => {
      // GIVEN / WHEN
      // Empty arrays are meaningful: they must survive to the template as empty lists rather than
      // being dropped, so the workspace denies all traffic.
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        networkAccessControl: { prefixLists: [], vpcEndpoints: [] },
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        NetworkAccessControl: {
          PrefixListIds: [],
          VpceIds: [],
        },
      });
    });

    test('renders an empty NetworkAccessControl for an empty configuration object', () => {
      // GIVEN / WHEN
      // Neither prefixLists nor vpcEndpoints supplied: both sides map to undefined, so the
      // rendered NetworkAccessControl is an empty object (no access restriction expressed).
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        networkAccessControl: {},
      });

      // THEN
      Template.fromStack(stack).hasResourceProperties('AWS::Grafana::Workspace', {
        NetworkAccessControl: {
          PrefixListIds: Match.absent(),
          VpceIds: Match.absent(),
        },
      });
    });
  });

  describe('tags', () => {
    test('renders tags supplied through props.tags', () => {
      // GIVEN / WHEN
      new Workspace(stack, 'Workspace', {
        ...baseProps(),
        tags: {
          environment: 'test',
          team: 'observability',
        },
      });

      // THEN
      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        Tags: Match.arrayWith([
          { Key: 'environment', Value: 'test' },
          { Key: 'team', Value: 'observability' },
        ]),
      });
    });

    test('propagates tags added via Tags.of(workspace).add()', () => {
      // GIVEN
      const workspace = new Workspace(stack, 'Workspace', baseProps());

      // WHEN
      Tags.of(workspace).add('costCenter', '1234');

      // THEN
      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        Tags: Match.arrayWith([{ Key: 'costCenter', Value: '1234' }]),
      });
    });

    test('combines tags from props.tags and Tags.of()', () => {
      // GIVEN
      const workspace = new Workspace(stack, 'Workspace', {
        ...baseProps(),
        tags: { environment: 'test' },
      });

      // WHEN
      Tags.of(workspace).add('costCenter', '1234');

      // THEN
      // Assert each tag independently: Match.arrayWith matches patterns as an ordered
      // subsequence, so checking them separately avoids coupling to the render order.
      const template = Template.fromStack(stack);
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        Tags: Match.arrayWith([{ Key: 'environment', Value: 'test' }]),
      });
      template.hasResourceProperties('AWS::Grafana::Workspace', {
        Tags: Match.arrayWith([{ Key: 'costCenter', Value: '1234' }]),
      });
    });
  });

  describe('CloudFormation attribute getters', () => {
    test('an owned workspace exposes attributes as unresolved tokens', () => {
      // GIVEN / WHEN
      const workspace = new Workspace(stack, 'Workspace', baseProps());

      // THEN
      Template.fromStack(stack).resourceCountIs('AWS::Grafana::Workspace', 1);

      const tokenAttrs: ReadonlyArray<readonly [string, string | undefined]> = [
        ['workspaceId', workspace.workspaceId],
        ['endpoint', workspace.endpoint],
        ['status', workspace.status],
        ['samlConfigurationStatus', workspace.samlConfigurationStatus],
        ['ssoClientId', workspace.ssoClientId],
        ['creationTimestamp', workspace.creationTimestamp],
        ['modificationTimestamp', workspace.modificationTimestamp],
        ['grafanaVersion', workspace.grafanaVersion],
      ];
      for (const [, value] of tokenAttrs) {
        expect(value).toBeDefined();
        expect(Token.isUnresolved(value)).toBe(true);
      }
    });

    test('workspaceArn is an unresolved token that resolves to the expected ARN shape', () => {
      // GIVEN / WHEN
      const workspace = new Workspace(stack, 'Workspace', baseProps());

      // THEN
      expect(workspace.workspaceArn).toBeDefined();
      expect(Token.isUnresolved(workspace.workspaceArn)).toBe(true);

      const resolved = JSON.stringify(stack.resolve(workspace.workspaceArn));
      expect(resolved).toContain(':grafana:');
      expect(resolved).toContain('workspaces/');
      expect(resolved).toContain('123456789012');
      expect(resolved).toContain('us-east-1');
    });
  });

  describe('import', () => {
    describe('fromWorkspaceArn', () => {
      test('round-trips a concrete ARN and parses the workspaceId', () => {
        // GIVEN
        const arn = 'arn:aws:grafana:us-east-1:123456789012:workspaces/g-abc123def4';

        // WHEN
        const imported = Workspace.fromWorkspaceArn(stack, 'Imported', arn);

        // THEN
        expect(imported.workspaceArn).toBe(arn);
        expect(imported.workspaceId).toBe('g-abc123def4');
        expect(Token.isUnresolved(imported.workspaceId)).toBe(false);
      });

      test('does not throw on a tokenized-id ARN and the ARN round-trips', () => {
        // GIVEN
        const tokenizedId = Fn.ref('SomeWorkspaceIdParam');
        const arn = stack.formatArn({
          service: 'grafana',
          resource: 'workspaces',
          resourceName: tokenizedId,
          arnFormat: ArnFormat.SLASH_RESOURCE_NAME,
        });

        // WHEN
        let imported!: IWorkspace;
        expect(() => {
          imported = Workspace.fromWorkspaceArn(stack, 'Imported', arn);
        }).not.toThrow();

        // THEN
        expect(imported.workspaceArn).toBe(arn);
        expect(Token.isUnresolved(imported.workspaceId)).toBe(true);
      });

      test('exposes no create-time configuration (identity-only import)', () => {
        // GIVEN
        const arn = 'arn:aws:grafana:us-east-1:123456789012:workspaces/g-idonly0001';

        // WHEN
        const imported = Workspace.fromWorkspaceArn(stack, 'Imported', arn);

        // THEN
        expect(imported.accountAccessType).toBeUndefined();
        expect(imported.authenticationProviders).toBeUndefined();
        expect(imported.permissionType).toBeUndefined();
        expect(imported.endpoint).toBeUndefined();
        expect(imported.status).toBeUndefined();
      });

      test('falls back to an empty workspaceId when the ARN has no resource name', () => {
        // GIVEN
        // An ARN whose `workspaces` resource carries no name segment: splitArn yields an undefined
        // resourceName, which the construct maps to '' rather than throwing.
        const arn = 'arn:aws:grafana:us-east-1:123456789012:workspaces';

        // WHEN
        const imported = Workspace.fromWorkspaceArn(stack, 'Imported', arn);

        // THEN
        expect(imported.workspaceArn).toBe(arn);
        expect(imported.workspaceId).toBe('');
      });
    });

    describe('fromWorkspaceAttributes', () => {
      test('parses the workspaceId from the ARN and retains supplied attributes', () => {
        // GIVEN
        const workspaceArn =
          `arn:${stack.partition}:grafana:${stack.region}:${stack.account}:workspaces/workspace-id`;

        // WHEN
        const imported = Workspace.fromWorkspaceAttributes(stack, 'Imported', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          workspaceArn,
        });

        // THEN
        expect(imported.workspaceId).toEqual('workspace-id');
        expect(imported.workspaceArn).toEqual(workspaceArn);
        expect(imported.accountAccessType).toEqual(AccountAccessType.CURRENT_ACCOUNT);
        expect(imported.authenticationProviders).toEqual([AuthenticationProviders.AWS_SSO]);
        expect(imported.permissionType).toEqual(PermissionTypes.CUSTOMER_MANAGED);
      });
    });
  });

  describe('isWorkspace', () => {
    test('returns true for a Workspace instance', () => {
      // GIVEN
      const workspace = new Workspace(stack, 'Workspace', baseProps());

      // WHEN / THEN
      expect(Workspace.isWorkspace(workspace)).toBe(true);
    });

    test('returns false for a non-Workspace object', () => {
      // GIVEN / WHEN / THEN
      expect(Workspace.isWorkspace({})).toBe(false);
    });
  });
});

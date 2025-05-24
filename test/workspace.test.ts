import { Stack } from 'aws-cdk-lib';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import {
  AccountAccessType,
  AuthenticationProviders,
  PermissionTypes,
  Workspace,
} from '../src/workspace';

let stack: Stack;

beforeEach(() => {
  stack = new Stack();
});

describe('Workspace', () => {
  describe('constructor', () => {
    test('should create a new workspace', () => {
      const grafanaRole = new Role(stack, 'GrafanaWorkspaceRole', {
        assumedBy: new ServicePrincipal('grafana.amazonaws.com'),
        description: 'Role for Amazon Managed Grafana Workspace',
      });

      const workspace = new Workspace(stack, 'Workspace', {
        accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
        authenticationProviders: [AuthenticationProviders.AWS_SSO],
        permissionType: PermissionTypes.CUSTOMER_MANAGED,
        role: grafanaRole,
      });

      expect(workspace).toBeDefined();
    });
  });
});

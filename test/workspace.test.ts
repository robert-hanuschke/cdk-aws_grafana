import { Stack } from 'aws-cdk-lib';
import { GatewayVpcEndpoint, GatewayVpcEndpointAwsService, PrefixList, SecurityGroup, Subnet, Vpc, VpcEndpoint } from 'aws-cdk-lib/aws-ec2';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import {
  AccountAccessType,
  AuthenticationProviders,
  NetworkAccessControl,
  NotificationDestinations,
  PermissionTypes,
  SamlAssertionAttributes,
  SamlConfiguration,
  SamlIdpMetadata,
  SamlRoleValues,
  VpcConfiguration,
  Workspace,
  WorkspaceProps,
} from '../src';

let stack: Stack;
let role: Role;
let vpc: Vpc;


beforeEach(() => {
  stack = new Stack(undefined, undefined, { env: { account: '123456789012', region: 'us-east-1' } });
  role = new Role(stack, 'GrafanaWorkspaceRole', {
    assumedBy: new ServicePrincipal('grafana.amazonaws.com'),
    description: 'Role for Amazon Managed Grafana Workspace',
  });
  vpc = new Vpc(stack, 'vpc');
});

describe('Workspace', () => {
  describe('constructor', () => {
    test('should create a new workspace', () => {
      const workspace = new Workspace(stack, 'Workspace', {
        accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
        authenticationProviders: [AuthenticationProviders.AWS_SSO],
        permissionType: PermissionTypes.CUSTOMER_MANAGED,
        clientToken: 'testtoken',
        description: 'my Grafana workspace',
        grafanaVersion: '10.4',
        name: 'myWorkspace',
        notificationDestinations: [NotificationDestinations.SNS],
        pluginAdminEnabled: true,
        role,
        samlConfiguration: {
          allowedOrganizations: ['org1', 'org2'],
          assertionAtrributes: {
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
          securityGroups: [new SecurityGroup(stack, 'sg', {
            vpc,
          })],
          subnets: vpc.privateSubnets,
        },
      });

      expect(workspace).toBeDefined();
    });

    test('should create a new workspace with minimal parameters', () => {
      const workspace = new Workspace(stack, 'Workspace', {
        accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
        authenticationProviders: [AuthenticationProviders.AWS_SSO],
        permissionType: PermissionTypes.CUSTOMER_MANAGED,
        role,
      });

      expect(workspace).toBeDefined();
    });

    test('should fail if props is not an object', () => {
      try {
        new Workspace(stack, 'Workspace', 1 as unknown as WorkspaceProps);
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('Props is not an object');
      }
    });

    test('should fail if role is missing for accountAccessType CURRENT_ACCOUNT', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('Role must be provided when accountAccessType is CURRENT_ACCOUNT');
      }
    });

    test('should fail if clientToken is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          clientToken: 1 as unknown as string,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('clientToken: must be a string');
      }
    });

    test('should fail if clientToken is not within the permitted length', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          clientToken: 'r'.repeat(65),
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('clientToken: must be at most 64 characters long');
      }
    });

    test('should fail if clientToken contains non-printable characters', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          clientToken: String.fromCharCode(0, 1, 2, 3, 4, 10, 13, 27),
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('clientToken: must contain only printable ASCII characters');
      }
    });

    test('should fail if description is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          description: 1 as unknown as string,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('description: must be a string');
      }
    });

    test('should fail if description is longer than 2048 characters', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          description: 'r'.repeat(2049),
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('description: must be at most 2048 characters long');
      }
    });

    test('should fail if grafanaVersion is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          grafanaVersion: 1 as unknown as string,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('grafanaVersion: must be a string');
      }
    });

    test('should fail if grafanaVersion is empty', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          grafanaVersion: '',
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('grafanaVersion: must be at least 1 character long');
      }
    });

    test('should fail if grafanaVersion exceeds 255 characters', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          grafanaVersion: 'r'.repeat(256),
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('grafanaVersion: must be at most 255 characters long');
      }
    });

    test('should fail if name is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          name: 1 as unknown as string,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('name: must be a string');
      }
    });

    test('should fail if name is not within the allowed length', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          name: 'r'.repeat(256),
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('name: must be at most 255 characters long');
      }
    });

    test('should fail if name contains forbidden characters', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          name: '%',
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('name: can only contain alphanumeric characters, hyphens, dots, underscores, and tildes');
      }
    });

    test('should fail if networkAccessControl is not an object', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          networkAccessControl: 1 as unknown as NetworkAccessControl,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('networkAccessControl: must be an object');
      }
    });

    test('should fail if networkAccessControl.prefixLists is not an array', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          networkAccessControl: {
            prefixLists: 1 as unknown as PrefixList[],
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('networkAccessControl: prefixLists must be an array');
      }
    });

    test('should fail if networkAccessControl.prefixLists has more than 5 members', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          networkAccessControl: {
            prefixLists: Array.from({ length: 6 }, (_, i) =>
              new PrefixList(stack, `prefix${i}`),
            ),
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('networkAccessControl: prefixLists must have at most 5 elements');
      }
    });

    test('should fail if networkAccessControl.vpcEndpoints is not an array', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          networkAccessControl: {
            vpcEndpoints: 1 as unknown as VpcEndpoint[],
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('networkAccessControl: vpcEndpoints must be an array');
      }
    });

    test('should fail if networkAccessControl.vpcEndpoints has more than 5 members', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          networkAccessControl: {
            vpcEndpoints: Array.from({ length: 6 }, (_, i) =>
              new GatewayVpcEndpoint(stack, `vpcEndpoint${i}`, {
                service: GatewayVpcEndpointAwsService.DYNAMODB,
                vpc,
              }),
            ),
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('networkAccessControl: vpcEndpoints must have at most 5 elements');
      }
    });

    test('should fail if organizationRoleName is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          organizationRoleName: 1 as unknown as string,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('organizationRoleName: must be a string');
      }
    });

    test('should fail if organizationRoleName is an empty string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          organizationRoleName: '',
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('organizationRoleName: must be at least 1 character long');
      }
    });

    test('should fail if organizationRoleName exceeds max allowed length', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          organizationRoleName: 'r'.repeat(2049),
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('organizationRoleName: must be at most 2048 characters long');
      }
    });

    test('should fail if samlConfiguration is not an object', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: 1 as unknown as SamlConfiguration,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: must be an object');
      }
    });

    test('should fail if SAML assertionAttributes is not an object', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            assertionAtrributes: 1 as unknown as SamlAssertionAttributes,
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: assertionAtrributes: must be an object');
      }
    });

    test('should fail if SAML assertionAttribute is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            assertionAtrributes: {
              email: 1 as unknown as string,
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain("samlConfiguration: assertionAtrributes: Property 'email' must be a string");
      }
    });

    test('should fail if SAML assertionAttribute is an empty string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            assertionAtrributes: {
              email: '',
              groups: undefined,
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain("samlConfiguration: assertionAtrributes: Property 'email' must be at least 1 character long");
      }
    });

    test('should fail if SAML assertionAttribute is more than 256 characters', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            assertionAtrributes: {
              email: 'r'.repeat(257),
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain("samlConfiguration: assertionAtrributes: Property 'email' must be at most 256 characters long");
      }
    });

    test('should fail if SAML idpMetadata is not an object', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: 1 as unknown as SamlIdpMetadata,
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: idpMetadata: must be an object');
      }
    });

    test('should fail if SAML idpMetadata.url is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {
              url: 1 as unknown as string,
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain("Property 'url' must be a string");
      }
    });

    test('should fail if SAML idpMetadata.url is an empty string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {
              url: '',
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain("samlConfiguration: idpMetadata: Property 'url' must be at least 1 character long");
      }
    });

    test('should fail if SAML idpMetadata.url exceeds maximum length', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {
              url: 'r'.repeat(2049),
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain("samlConfiguration: idpMetadata: Property 'url' must be at most 2048 characters long");
      }
    });

    test('should fail if SAML idpMetadata.xml is not a string', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {
              xml: 1 as unknown as string,
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain("Property 'xml' must be a string");
      }
    });

    test('should fail if SAML idpMetadata is missing', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {

          } as unknown as SamlConfiguration,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: idpMetadata is required in samlConfiguration');
      }
    });

    test('should fail if SAML allowedOrganizations is not an array', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            allowedOrganizations: 1 as unknown as string[],
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: allowedOrganizations must be an array');
      }
    });

    test('should fail if SAML allowedOrganizations has no elements', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            allowedOrganizations: [],
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: allowedOrganizations must have at least 1 element');
      }
    });

    test('should fail if SAML allowedOrganizations has more than 256 elements', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            allowedOrganizations: Array(257).fill('r'),
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: allowedOrganizations must have at most 256 elements');
      }
    });

    test('should fail if SAML allowedOrganizations has a non-string member', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            allowedOrganizations: ['r', 42] as unknown as string[],
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: allowedOrganizations[1] must be a string');
      }
    });

    test('should fail if SAML loginValidityDuration is not a number', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            loginValidityDuration: 'r' as unknown as number,
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: loginValidityDuration must be a number');
      }
    });

    test('should fail if SAML loginValidityDuration is a negative number', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            loginValidityDuration: -42,
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: loginValidityDuration must be at least 1');
      }
    });

    test('should fail if SAML roleValues is not an object', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            roleValues: 1 as unknown as SamlRoleValues,
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: roleValues must be an object');
      }
    });

    test('should fail if SAML roleValues.admin is not an array', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            roleValues: {
              admin: 1 as unknown as string[],
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: roleValues.admin must be an array');
      }
    });

    test('should fail if SAML roleValues.admin has a non-string member', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            roleValues: {
              admin: ['r', 42] as unknown as string[],
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: roleValues.admin[1] must be a string');
      }
    });

    test('should fail if SAML roleValues.admin has more than 256 members', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            roleValues: {
              admin: Array(257).fill('r'),
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: roleValues.admin must have at most 256 elements');
      }
    });

    test('should fail if SAML roleValues.editor is not an array', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            roleValues: {
              editor: 1 as unknown as string[],
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: roleValues.editor must be an array');
      }
    });

    test('should fail if SAML roleValues.editor has a non-string member', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            roleValues: {
              editor: ['r', 42] as unknown as string[],
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: roleValues.editor[1] must be a string');
      }
    });

    test('should fail if SAML roleValues.editor has more than 256 members', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          samlConfiguration: {
            idpMetadata: {},
            roleValues: {
              editor: Array(257).fill('r'),
            },
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('samlConfiguration: roleValues.editor must have at most 256 elements');
      }
    });

    test('should fail if vcpConfiguration is not an object', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: 1 as unknown as VpcConfiguration,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: vpcConfiguration must be an object');
      }
    });

    test('should fail if vcpConfiguration.securityGroups is missing', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            subnets: Array.from({ length: 2 }, (_, i) =>
              new Subnet(stack, `Subnet${i + 1}`, {
                availabilityZone: vpc.availabilityZones[0],
                cidrBlock: `10.1.${i}.0/24`,
                vpcId: vpc.vpcId,
              }),
            ),
          } as unknown as VpcConfiguration,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: securityGroups is required in vpcConfiguration');
      }
    });

    test('should fail if vcpConfiguration.securityGroups is not an array', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            securityGroups: 1 as unknown as SecurityGroup[],
            subnets: Array.from({ length: 2 }, (_, i) =>
              new Subnet(stack, `Subnet${i + 1}`, {
                availabilityZone: vpc.availabilityZones[0],
                cidrBlock: `10.1.${i}.0/24`,
                vpcId: vpc.vpcId,
              }),
            ),
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: securityGroups must be an array');
      }
    });

    test('should fail if vcpConfiguration.securityGroups has less than 1 items', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            securityGroups: [],
            subnets: Array.from({ length: 2 }, (_, i) =>
              new Subnet(stack, `Subnet${i + 1}`, {
                availabilityZone: vpc.availabilityZones[0],
                cidrBlock: `10.1.${i}.0/24`,
                vpcId: vpc.vpcId,
              }),
            ),
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: securityGroups must have at least 1 element');
      }
    });

    test('should fail if vcpConfiguration.securityGroups has more than 5 items', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            securityGroups: Array.from({ length: 6 }, (_, i) =>
              new SecurityGroup(stack, `SG${i + 1}`, {
                vpc,
              }),
            ),
            subnets: Array.from({ length: 2 }, (_, i) =>
              new Subnet(stack, `Subnet${i + 1}`, {
                availabilityZone: vpc.availabilityZones[0],
                cidrBlock: `10.1.${i}.0/24`,
                vpcId: vpc.vpcId,
              }),
            ),
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: securityGroups must have at most 5 elements');
      }
    });

    test('should fail if vcpConfiguration.subnets is missing', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            ssecurityGroups: [new SecurityGroup(stack, 'sg', {
              vpc,
            })],
          } as unknown as VpcConfiguration,
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: subnets is required in vpcConfiguration');
      }
    });

    test('should fail if vcpConfiguration.subnets is not an array', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            securityGroups: [new SecurityGroup(stack, 'sg', {
              vpc,
            })],
            subnets: 1 as unknown as Subnet[],
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: subnets must be an array');
      }
    });

    test('should fail if vcpConfiguration.subnets has less than 2 items', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            securityGroups: [new SecurityGroup(stack, 'sg', {
              vpc,
            })],
            subnets: [new Subnet(stack, 'subnet1', {
              availabilityZone: vpc.availabilityZones[0],
              cidrBlock: '10.1.0.0/24',
              vpcId: vpc.vpcId,
            })],
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: subnets must have at least 2 elements');
      }
    });

    test('should fail if vcpConfiguration.subnets has more than 6 items', () => {
      try {
        new Workspace(stack, 'Workspace', {
          accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
          authenticationProviders: [AuthenticationProviders.AWS_SSO],
          permissionType: PermissionTypes.CUSTOMER_MANAGED,
          role,
          vpcConfiguration: {
            securityGroups: [new SecurityGroup(stack, 'sg', {
              vpc,
            })],
            subnets: Array.from({ length: 7 }, (_, i) =>
              new Subnet(stack, `Subnet${i + 1}`, {
                availabilityZone: vpc.availabilityZones[0],
                cidrBlock: `10.1.${i}.0/24`,
                vpcId: vpc.vpcId,
              }),
            ),
          },
        });
        throw new Error('Expected error was not thrown');
      } catch (e: any) {
        expect(e.message).toContain('vpcConfiguration: subnets must have at most 6 elements');
      }
    });

    test('should import from workspaceArn', () => {
      const workspaceArn = `arn:${stack.partition}:grafana:${stack.region}:${stack.account}:workspaces/workspace-id`;
      const workspace = Workspace.fromWorkspaceAttributes(stack, 'Workspace', {
        accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
        authenticationProviders: [AuthenticationProviders.AWS_SSO],
        permissionType: PermissionTypes.CUSTOMER_MANAGED,
        workspaceArn,
      });
      expect(workspace.workspaceId).toEqual('workspace-id');
      expect(workspace.workspaceArn).toEqual(workspaceArn);
    });
  });
});

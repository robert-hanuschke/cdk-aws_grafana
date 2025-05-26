import {
  IPrefixList,
  ISecurityGroup,
  ISubnet,
  IVpcEndpoint,
} from 'aws-cdk-lib/aws-ec2';
import { CfnWorkspace, CfnWorkspaceProps } from 'aws-cdk-lib/aws-grafana';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

/**
 * Specifies whether the workspace can access AWS resources in this AWS account only, or whether it
 * can also access AWS resources in other accounts in the same organization. If this is
 * ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
 * workspace can access.
 */
export enum AccountAccessType {
  /**
   * Access is limited to the current AWS account only.
   */
  CURRENT_ACCOUNT = 'CURRENT_ACCOUNT',

  /**
   * Access is extended to the entire AWS organization.
   */
  ORGANIZATION = 'ORGANIZATION',
}

/**
 * Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate
 * users for using the Grafana console within a workspace.
 *
 * @see https://docs.aws.amazon.com/grafana/latest/APIReference/API_CreateWorkspace.html
 */
export enum AuthenticationProviders {
  /**
   * AWS Single Sign-On authentication provider.
   */
  AWS_SSO = 'AWS_SSO',

  /**
   * Security Assertion Markup Language (SAML) authentication provider.
   */
  SAML = 'SAML',
}

/**
 * The configuration settings for network access to your workspace.
 */
export interface NetworkAccessControl {
  /**
   * An array of prefix list IDs. A prefix list is a list of CIDR ranges of IP addresses. The IP
   * addresses specified are allowed to access your workspace. If the list is not included in the
   * configuration (passed an empty array) then no IP addresses are allowed to access the
   * workspace.
   *
   * Maximum of 5 prefix lists allowed.
   */
  readonly prefixLists?: IPrefixList[];

  /**
   * An array of Amazon VPC endpoint IDs for the workspace. You can create VPC endpoints to your
   * Amazon Managed Grafana workspace for access from within a VPC. If a NetworkAccessConfiguration
   * is specified then only VPC endpoints specified here are allowed to access the workspace. If
   * you pass in an empty array of strings, then no VPCs are allowed to access the workspace.
   *
   * Maximum of 5 VPC endpoints allowed.
   */
  readonly vpcEndpoints?: IVpcEndpoint[];
}

/**
 * The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and
 * permissions for, to allow Amazon Managed Grafana to use these channels.
 */
export enum NotificationDestinations {
  /**
   * Amazon Simple Notification Service (SNS) as notification destination.
   */
  SNS = 'SNS',
}

/**
 * If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana
 * console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the
 * permissions that the workspace needs to use AWS data sources and notification channels.
 *
 * If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.

 * If you are working with a workspace in a member account of an organization and that account is
 * not a delegated administrator account, and you want the workspace to access data sources in
 * other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.
 */
export enum PermissionTypes {
  /**
   * Customer-managed permissions where you manage user access to Grafana.
   */
  CUSTOMER_MANAGED = 'CUSTOMER_MANAGED',

  /**
   * Service-managed permissions where AWS manages user access to Grafana.
   */
  SERVICE_MANAGED = 'SERVICE_MANAGED',
}

/**
 * A structure that defines which attributes in the IdP assertion are to be used to define
 * information about the users authenticated by the IdP to use the workspace.
 *
 * Each attribute must be a string with length between 1 and 256 characters.
 */
export interface SamlAssertionAttributes {
  /**
   * The name of the attribute within the SAML assertion to use as the email names for SAML users.
   *
   * Must be between 1 and 256 characters long.
   */
  readonly email?: string;
  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names
   * for user groups.
   *
   * Must be between 1 and 256 characters long.
   */
  readonly groups?: string;
  /**
   * The name of the attribute within the SAML assertion to use as the login names for SAML users.
   *
   * Must be between 1 and 256 characters long.
   */
  readonly login?: string;
  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names
   * for SAML users.
   *
   * Must be between 1 and 256 characters long.
   */
  readonly name?: string;
  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names
   * for the users' organizations.
   *
   * Must be between 1 and 256 characters long.
   */
  readonly org?: string;
  /**
   * The name of the attribute within the SAML assertion to use as the user roles.
   *
   * Must be between 1 and 256 characters long.
   */
  readonly role?: string;
}

/**
 * A structure containing the identity provider (IdP) metadata used to integrate the identity
 * provider with this workspace.
 */
export interface SamlIdpMetadata {
  /**
   * The URL of the location containing the IdP metadata.
   *
   * Must be a string with length between 1 and 2048 characters.
   */
  readonly url?: string;

  /**
   * The full IdP metadata, in XML format.
   */
  readonly xml?: string;
}

/**
 * A structure containing arrays that map group names in the SAML assertion to the Grafana Admin
 * and Editor roles in the workspace.
 */
export interface SamlRoleValues {
  /**
   * A list of groups from the SAML assertion attribute to grant the Grafana Admin role to.
   *
   * Maximum of 256 elements.
   */
  readonly admin?: string[];

  /**
   * A list of groups from the SAML assertion attribute to grant the Grafana Editor role to.
   *
   * Maximum of 256 elements.
   */
  readonly editor?: string[];
}

/**
 * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace
 * user information and define which groups in the assertion attribute are to have the Admin and
 * Editor roles in the workspace.
 */
export interface SamlConfiguration {
  /**
   * Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed
   * Grafana workspace. If this is empty, all organizations in the assertion attribute have access.
   *
   * Must have between 1 and 256 elements.
   */
  readonly allowedOrganizations?: string[];

  /**
   * A structure that defines which attributes in the SAML assertion are to be used to define
   * information about the users authenticated by that IdP to use the workspace.
   */
  readonly assertionAtrributes?: SamlAssertionAttributes;

  /**
   * A structure containing the identity provider (IdP) metadata used to integrate the identity
   * provider with this workspace.
   *
   * Required field for SAML configuration.
   */
  readonly idpMetadata: SamlIdpMetadata;

  /**
   * How long a sign-on session by a SAML user is valid, before the user has to sign on again.
   *
   * Must be a positive number.
   */
  readonly loginValidityDuration?: number;

  /**
   * A structure containing arrays that map group names in the SAML assertion to the Grafana Admin
   * and Editor roles in the workspace.
   */
  readonly roleValues?: SamlRoleValues;
}

/**
 * The configuration settings for an Amazon VPC that contains data sources for your Grafana
 * workspace to connect to.
 */
export interface VpcConfiguration {
  /**
   * The list of Amazon EC2 security groups attached to the Amazon VPC for your Grafana
   * workspace to connect. Duplicates not allowed.
   *
   * Array Members: Minimum number of 1 items. Maximum number of 5 items.
   *
   * Required for VPC configuration.
   */
  readonly securityGroups: ISecurityGroup[];

  /**
   * The list of Amazon EC2 subnets created in the Amazon VPC for your Grafana workspace to
   * connect. Duplicates not allowed.
   *
   * Array Members: Minimum number of 2 items. Maximum number of 6 items.
   *
   * Required for VPC configuration.
   */
  readonly subnets: ISubnet[];
}

/**
 * Properties for creating an Amazon Managed Grafana workspace.
 */
export interface WorkspaceProps {
  /**
   * Specifies whether the workspace can access AWS resources in this AWS account only, or whether
   * it can also access AWS resources in other accounts in the same organization. If this is
   * ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
   * workspace can access.
   *
   * Required field.
   */
  readonly accountAccessType: AccountAccessType;

  /**
   * Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to
   * authenticate users for using the Grafana console within a workspace.
   *
   * Required field.
   */
  readonly authenticationProviders: AuthenticationProviders[];

  /**
   * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   *
   * Must be 1-64 characters long and contain only printable ASCII characters.
   */
  readonly clientToken?: string;

  /**
   * Specifies the AWS data sources that have been configured to have IAM roles and permissions
   * created to allow Amazon Managed Grafana to read data from these sources.
   * This list is only used when the workspace was created through the AWS console, and the
   * permissionType is SERVICE_MANAGED.
   */
  readonly dataSources?: string[];

  /**
   * The user-defined description of the workspace.
   *
   * Maximum length of 2048 characters.
   */
  readonly description?: string;

  /**
   * Specifies the version of Grafana to support in the workspace. Defaults to the latest version
   * on create (for example, 9.4), or the current version of the workspace on update.
   * Can only be used to upgrade (for example, from 8.4 to 9.4), not downgrade (for example, from
   * 9.4 to 8.4).
   *
   * Must be 1-255 characters long.
   */
  readonly grafanaVersion?: string;

  /**
   * The name of the workspace.
   *
   * Must be 1-255 characters long and contain only alphanumeric characters, hyphens, dots,
   * underscores, and tildes.
   */
  readonly name?: string;

  /**
   * The configuration settings for network access to your workspace.
   */
  readonly networkAccessControl?: NetworkAccessControl;

  /**
   * The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles
   * and permissions for, to allow Amazon Managed Grafana to use these channels.
   */
  readonly notificationDestinations?: NotificationDestinations[];

  /**
   * Specifies the organizational units that this workspace is allowed to use data sources from, if
   * this workspace is in an account that is part of an organization.
   */
  readonly organizationalUnits?: string[];

  /**
   * Name of the IAM role to use for the organization.
   * Maximum length of 2048 characters.
   */
  readonly organizationRoleName?: string;

  /**
   * If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana
   * console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the
   * permissions that the workspace needs to use AWS data sources and notification channels.
   *
   * If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.
   *
   * If you are working with a workspace in a member account of an organization and that account is
   * not a delegated administrator account, and you want the workspace to access data sources in
   * other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.
   *
   * Required field.
   */
  readonly permissionType: PermissionTypes;

  /**
   * Whether plugin administration is enabled in the workspace. Setting to true allows workspace
   * admins to install, uninstall, and update plugins from within the Grafana workspace.
   *
   * This option is only valid for workspaces that support Grafana version 9 or newer.
   *
   * Default: false
   */
  readonly pluginAdminEnabled?: boolean;

  /**
   * The IAM role that grants permissions to the AWS resources that the workspace will view data
   * from.
   */
  readonly role?: IRole;

  /**
   * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace
   * user information and define which groups in the assertion attribute are to have the Admin and
   * Editor roles in the workspace.
   */
  readonly samlConfiguration?: SamlConfiguration;

  /**
   * The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for
   * this workspace.
   */
  readonly stackSetName?: string;

  /**
   * The configuration settings for an Amazon VPC that contains data sources for your Grafana
   * workspace to connect to.
   */
  readonly vpcConfiguration?: VpcConfiguration;
}

/**
 * Status of SAML configuration for a Grafana workspace.
 */
export enum SamlConfigurationStatuses {
  /**
   * SAML is configured for the workspace.
   */
  CONFIGURED = 'CONFIGURED',

  /**
   * SAML is not configured for the workspace.
   */
  NOT_CONFIGURED = 'NOT_CONFIGURED',
}

/**
 * Status of a Grafana workspace.
 */
export enum Status {
  /**
   * Workspace is active and ready to use.
   */
  ACTIVE = 'ACTIVE',

  /**
   * Workspace is being created.
   */
  CREATING = 'CREATING',

  /**
   * Workspace is being deleted.
   */
  DELETING = 'DELETING',

  /**
   * Workspace operation has failed.
   */
  FAILED = 'FAILED',

  /**
   * Workspace is being updated.
   */
  UPDATING = 'UPDATING',

  /**
   * Workspace is being upgraded.
   */
  UPGRADING = 'UPGRADING',

  /**
   * Workspace deletion has failed.
   */
  DELETION_FAILED = 'DELETION_FAILED',

  /**
   * Workspace creation has failed.
   */
  CREATION_FAILED = 'CREATION_FAILED',

  /**
   * Workspace update has failed.
   */
  UPDATE_FAILED = 'UPDATE_FAILED',

  /**
   * Workspace upgrade has failed.
   */
  UPGRADE_FAILED = 'UPGRADE_FAILED',

  /**
   * License removal has failed.
   */
  LICENSE_REMOVAL_FAILED = 'LICENSE_REMOVAL_FAILED',
}

/**
 * Specifies a workspace. In a workspace, you can create Grafana dashboards and visualizations to
 * analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware
 * to run the Grafana server.
 */
export class Workspace extends Construct {
  /**
   * Validates the clientToken property.
   *
   * @param token - The client token to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be a string
   * - Must be between 1 and 64 characters long
   * - Must contain only printable ASCII characters
   */
  private static validateClientToken(token: unknown): string[] {
    const errors: string[] = [];

    if (token === undefined) {
      return errors; // Optional property can be undefined
    }

    if (typeof token !== 'string') {
      errors.push('clientToken must be a string');
      return errors; // No need to check further if not a string
    }

    const regex = /^[!-~]{1,64}$/;
    if (!regex.test(token)) {
      if (token.length < 1 || token.length > 64) {
        errors.push('clientToken must be between 1 and 64 characters long');
      }

      if (!/^[!-~]*$/.test(token)) {
        errors.push('clientToken must contain only printable ASCII characters');
      }
    }

    return errors;
  }

  /**
   * Validates the description property.
   *
   * @param description - The description to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be a string
   * - Maximum length of 2048 characters
   */
  private static validateDescription(description: unknown): string[] {
    const errors: string[] = [];

    if (description === undefined) {
      return errors; // Optional property can be undefined
    }

    if (typeof description !== 'string') {
      errors.push('description must be a string');
      return errors; // No need to check further if not a string
    }

    if (description.length > 2048) {
      errors.push('description cannot exceed 2048 characters');
    }

    return errors;
  }

  /**
   * Validates the grafanaVersion property.
   *
   * @param version - The Grafana version to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be a string
   * - Must be between 1 and 255 characters long
   */
  private static validateGrafanaVersion(version: unknown): string[] {
    const errors: string[] = [];

    if (version === undefined) {
      return errors; // Optional property can be undefined
    }

    if (typeof version !== 'string') {
      errors.push('grafanaVersion must be a string');
      return errors; // No need to check further if not a string
    }

    if (version.length < 1) {
      errors.push('grafanaVersion cannot be empty');
    }

    if (version.length > 255) {
      errors.push('grafanaVersion cannot exceed 255 characters');
    }

    return errors;
  }

  /**
   * Validates the name property.
   *
   * @param name - The workspace name to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be a string
   * - Must be between 1 and 255 characters long
   * - Can only contain alphanumeric characters, hyphens, dots, underscores, and tildes
   */
  private static validateName(name: unknown): string[] {
    const errors: string[] = [];

    if (name === undefined) {
      return errors; // Optional property can be undefined
    }

    if (typeof name !== 'string') {
      errors.push('name must be a string');
      return errors; // No need to check further if not a string
    }

    const regex = /^[a-zA-Z0-9\-._~]{1,255}$/;
    if (!regex.test(name)) {
      if (name.length < 1 || name.length > 255) {
        errors.push('name must be between 1 and 255 characters long');
      }

      if (!/^[a-zA-Z0-9\-._~]*$/.test(name)) {
        errors.push(
          'name can only contain alphanumeric characters, hyphens, dots, underscores, and tildes',
        );
      }
    }

    return errors;
  }

  /**
   * Validates the networkAccessControl property.
   *
   * @param nac - The network access control configuration to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be an object
   * - prefixLists (if present) must be an array with at most 5 items
   * - vpcEndpoints (if present) must be an array with at most 5 items
   */
  private static validateNetworkAccessControl(nac: unknown): string[] {
    const errors: string[] = [];

    if (nac === undefined) {
      return errors; // Optional property can be undefined
    }

    if (!nac || typeof nac !== 'object') {
      errors.push('networkAccessControl must be an object');
      return errors;
    }

    const networkAccessControl = nac as NetworkAccessControl;

    // Check prefixLists if present
    if (networkAccessControl.prefixLists !== undefined) {
      if (!Array.isArray(networkAccessControl.prefixLists)) {
        errors.push('prefixLists must be an array');
      } else if (networkAccessControl.prefixLists.length > 5) {
        errors.push('prefixLists can have at most 5 items');
      }
    }

    // Check vpcEndpoints if present
    if (networkAccessControl.vpcEndpoints !== undefined) {
      if (!Array.isArray(networkAccessControl.vpcEndpoints)) {
        errors.push('vpcEndpoints must be an array');
      } else if (networkAccessControl.vpcEndpoints.length > 5) {
        errors.push('vpcEndpoints can have at most 5 items');
      }
    }

    return errors;
  }

  /**
   * Validates the organizationRoleName property.
   *
   * @param roleName - The organization role name to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be a string
   * - Must be between 1 and 2048 characters long
   */
  private static validateOrganizationRoleName(roleName: unknown): string[] {
    const errors: string[] = [];

    if (roleName === undefined) {
      return errors; // Optional property can be undefined
    }

    if (typeof roleName !== 'string') {
      errors.push('organizationRoleName must be a string');
      return errors; // No need to check further if not a string
    }

    if (roleName.length < 1) {
      errors.push('organizationRoleName cannot be empty');
    }

    if (roleName.length > 2048) {
      errors.push('organizationRoleName cannot exceed 2048 characters');
    }

    return errors;
  }

  /**
   * Validates the SAML assertion attributes.
   *
   * @param obj - The SAML assertion attributes to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be an object
   * - Each attribute must be a string
   * - Each attribute must be between 1 and 256 characters long
   * - Valid attribute keys are: 'email', 'groups', 'login', 'name', 'org', 'role'
   */
  private static validateSamlAssertionAttributes(obj: unknown): string[] {
    const errors: string[] = [];

    if (!obj || typeof obj !== 'object') {
      return ['Input is not an object'];
    }

    const attributes = obj as Record<string, unknown>;

    for (const key in attributes) {
      const value = attributes[key];
      if (value === undefined) {
        continue; // Optional properties can be undefined
      }

      if (typeof value !== 'string') {
        errors.push(`Property '${key}' must be a string`);
      } else if (value.length < 1) {
        errors.push(`Property '${key}' cannot be empty`);
      } else if (value.length > 256) {
        errors.push(
          `Property '${key}' exceeds maximum length of 256 characters`,
        );
      }
    }

    return errors;
  }

  /**
   * Validates the SAML IdP metadata.
   *
   * @param obj - The SAML IdP metadata to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be an object
   * - url (if present) must be a string between 1 and 2048 characters long
   * - xml (if present) must be a string
   */
  private static validateSamlIdpMetadata(obj: unknown): string[] {
    const errors: string[] = [];

    if (!obj || typeof obj !== 'object') {
      return ['Input is not an object'];
    }

    const metadata = obj as Record<string, unknown>;

    // Check url property if present
    if (metadata.url !== undefined) {
      if (typeof metadata.url !== 'string') {
        errors.push("Property 'url' must be a string");
      } else if (metadata.url.length < 1) {
        errors.push("Property 'url' cannot be empty");
      } else if (metadata.url.length > 2048) {
        errors.push("Property 'url' exceeds maximum length of 2048 characters");
      }
    }

    // Check xml property if present
    if (metadata.xml !== undefined && typeof metadata.xml !== 'string') {
      errors.push("Property 'xml' must be a string");
    }

    return errors;
  }

  /**
   * Validates the SAML configuration.
   *
   * @param config - The SAML configuration to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be an object
   * - idpMetadata is required and must be valid
   * - assertionAtrributes (if present) must be valid
   * - allowedOrganizations (if present) must be an array of strings with 1-256 elements
   * - loginValidityDuration (if present) must be a positive number
   * - roleValues (if present) must be an object with valid admin and editor arrays
   */
  private static validateSamlConfiguration(config: unknown): string[] {
    const errors: string[] = [];

    if (config === undefined) {
      return errors; // Optional property can be undefined
    }

    if (!config || typeof config !== 'object') {
      errors.push('samlConfiguration must be an object');
      return errors;
    }

    const samlConfig = config as SamlConfiguration;

    // Check idpMetadata (required)
    if (samlConfig.idpMetadata === undefined) {
      errors.push('idpMetadata is required in samlConfiguration');
    } else {
      const idpMetadataErrors = Workspace.validateSamlIdpMetadata(
        samlConfig.idpMetadata,
      );
      if (idpMetadataErrors.length > 0) {
        errors.push(...idpMetadataErrors.map((err) => `idpMetadata: ${err}`));
      }
    }

    // Check assertionAtrributes if present
    if (samlConfig.assertionAtrributes !== undefined) {
      const attributeErrors = Workspace.validateSamlAssertionAttributes(
        samlConfig.assertionAtrributes,
      );
      if (attributeErrors.length > 0) {
        errors.push(
          ...attributeErrors.map((err) => `assertionAtrributes: ${err}`),
        );
      }
    }

    // Check allowedOrganizations if present
    if (samlConfig.allowedOrganizations !== undefined) {
      if (!Array.isArray(samlConfig.allowedOrganizations)) {
        errors.push('allowedOrganizations must be an array');
      } else {
        if (samlConfig.allowedOrganizations.length < 1) {
          errors.push('allowedOrganizations must have at least 1 element');
        }
        if (samlConfig.allowedOrganizations.length > 256) {
          errors.push(
            'allowedOrganizations cannot have more than 256 elements',
          );
        }

        for (let i = 0; i < samlConfig.allowedOrganizations.length; i++) {
          const org = samlConfig.allowedOrganizations[i];
          if (typeof org !== 'string') {
            errors.push(`allowedOrganizations[${i}] must be a string`);
          }
        }
      }
    }

    // Check loginValidityDuration if present
    if (samlConfig.loginValidityDuration !== undefined) {
      if (typeof samlConfig.loginValidityDuration !== 'number') {
        errors.push('loginValidityDuration must be a number');
      } else if (samlConfig.loginValidityDuration <= 0) {
        errors.push('loginValidityDuration must be positive');
      }
    }

    // Check roleValues if present
    if (samlConfig.roleValues !== undefined) {
      if (!samlConfig.roleValues || typeof samlConfig.roleValues !== 'object') {
        errors.push('roleValues must be an object');
      } else {
        // Check admin array if present
        if (samlConfig.roleValues.admin !== undefined) {
          if (!Array.isArray(samlConfig.roleValues.admin)) {
            errors.push('roleValues.admin must be an array');
          } else {
            for (let i = 0; i < samlConfig.roleValues.admin.length; i++) {
              if (typeof samlConfig.roleValues.admin[i] !== 'string') {
                errors.push(`roleValues.admin[${i}] must be a string`);
              }
            }
          }
        }

        // Check editor array if present
        if (samlConfig.roleValues.editor !== undefined) {
          if (!Array.isArray(samlConfig.roleValues.editor)) {
            errors.push('roleValues.editor must be an array');
          } else {
            for (let i = 0; i < samlConfig.roleValues.editor.length; i++) {
              if (typeof samlConfig.roleValues.editor[i] !== 'string') {
                errors.push(`roleValues.editor[${i}] must be a string`);
              }
            }
          }
        }
      }
    }

    return errors;
  }

  /**
   * Validates the vpcConfiguration property.
   *
   * @param config - The VPC configuration to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * Validation rules:
   * - Must be an object
   * - securityGroups is required and must be an array with 1-5 items
   * - subnets is required and must be an array with 2-6 items
   */
  private static validateVpcConfiguration(config: unknown): string[] {
    const errors: string[] = [];

    if (config === undefined) {
      return errors; // Optional property can be undefined
    }

    if (!config || typeof config !== 'object') {
      errors.push('vpcConfiguration must be an object');
      return errors;
    }

    const vpcConfig = config as VpcConfiguration;

    // Check securityGroups (required)
    if (vpcConfig.securityGroups === undefined) {
      errors.push('securityGroups is required in vpcConfiguration');
    } else if (!Array.isArray(vpcConfig.securityGroups)) {
      errors.push('securityGroups must be an array');
    } else {
      if (vpcConfig.securityGroups.length < 1) {
        errors.push('securityGroups must have at least 1 item');
      }
      if (vpcConfig.securityGroups.length > 5) {
        errors.push('securityGroups cannot have more than 5 items');
      }
    }

    // Check subnets (required)
    if (vpcConfig.subnets === undefined) {
      errors.push('subnets is required in vpcConfiguration');
    } else if (!Array.isArray(vpcConfig.subnets)) {
      errors.push('subnets must be an array');
    } else {
      if (vpcConfig.subnets.length < 2) {
        errors.push('subnets must have at least 2 items');
      }
      if (vpcConfig.subnets.length > 6) {
        errors.push('subnets cannot have more than 6 items');
      }
    }

    return errors;
  }

  /**
   * Validates all workspace properties.
   *
   * @param props - The workspace properties to validate
   * @returns An array of error messages if validation fails, or an empty array if valid
   *
   * This method aggregates validation results from all individual property validators.
   * It throws an error if props is not an object.
   */
  private static validateProps(props: unknown): string[] {
    const errors: string[] = [];

    if (!props || typeof props !== 'object') {
      throw new Error('Props is not an object');
    }
    const workspaceProps = props as WorkspaceProps;

    if (workspaceProps.clientToken !== undefined) {
      const clientTokenErrors = Workspace.validateClientToken(
        workspaceProps.clientToken,
      );
      if (clientTokenErrors.length > 0) {
        errors.push(...clientTokenErrors.map((err) => `clientToken: ${err}`));
      }
    }

    if (workspaceProps.description !== undefined) {
      const descriptionErrors = Workspace.validateDescription(
        workspaceProps.description,
      );
      if (descriptionErrors.length > 0) {
        errors.push(...descriptionErrors.map((err) => `description: ${err}`));
      }
    }

    if (workspaceProps.grafanaVersion !== undefined) {
      const grafanaVersionErrors = Workspace.validateGrafanaVersion(
        workspaceProps.grafanaVersion,
      );
      if (grafanaVersionErrors.length > 0) {
        errors.push(
          ...grafanaVersionErrors.map((err) => `grafanaVersion: ${err}`),
        );
      }
    }

    if (workspaceProps.name !== undefined) {
      const nameErrors = Workspace.validateName(workspaceProps.name);
      if (nameErrors.length > 0) {
        errors.push(...nameErrors.map((err) => `name: ${err}`));
      }
    }

    if (workspaceProps.networkAccessControl !== undefined) {
      const networkAccessControlErrors = Workspace.validateNetworkAccessControl(
        workspaceProps.networkAccessControl,
      );
      if (networkAccessControlErrors.length > 0) {
        errors.push(
          ...networkAccessControlErrors.map(
            (err) => `networkAccessControl: ${err}`,
          ),
        );
      }
    }

    if (workspaceProps.organizationRoleName !== undefined) {
      const organizationRoleNameErrors = Workspace.validateOrganizationRoleName(
        workspaceProps.organizationRoleName,
      );
      if (organizationRoleNameErrors.length > 0) {
        errors.push(
          ...organizationRoleNameErrors.map(
            (err) => `organizationRoleName: ${err}`,
          ),
        );
      }
    }

    if (workspaceProps.samlConfiguration !== undefined) {
      const samlConfigurationErrors = Workspace.validateSamlConfiguration(
        workspaceProps.samlConfiguration,
      );
      if (samlConfigurationErrors.length > 0) {
        errors.push(
          ...samlConfigurationErrors.map((err) => `samlConfiguration: ${err}`),
        );
      }
    }

    if (workspaceProps.vpcConfiguration !== undefined) {
      const vpcConfigurationErrors = Workspace.validateVpcConfiguration(
        workspaceProps.vpcConfiguration,
      );
      if (vpcConfigurationErrors.length > 0) {
        errors.push(
          ...vpcConfigurationErrors.map((err) => `vpcConfiguration: ${err}`),
        );
      }
    }

    return errors;
  }

  /**
   * Specifies whether the workspace can access AWS resources in this AWS account only, or whether
   * it can also access AWS resources in other accounts in the same organization. If this is
   * ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
   * workspace can access.
   */
  public readonly accountAccessType: AccountAccessType;

  /**
   * Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to
   * authenticate users for using the Grafana console within a workspace.
   */
  public readonly authenticationProviders: AuthenticationProviders[];

  /**
   * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  public readonly clientToken?: string;

  /**
   * Specifies the AWS data sources that have been configured to have IAM roles and permissions
   * created to allow Amazon Managed Grafana to read data from these sources.
   *
   * This list is only used when the workspace was created through the AWS console, and the
   * permissionType is SERVICE_MANAGED.
   */
  public readonly dataSources?: string[];

  /**
   * The user-defined description of the workspace.
   */
  public readonly description?: string;

  /**
   * The name of the workspace.
   */
  public readonly name?: string;

  /**
   * The configuration settings for network access to your workspace.
   */
  public readonly networkAccessControl?: NetworkAccessControl;

  /**
   * The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles
   * and permissions for, to allow Amazon Managed Grafana to use these channels.
   */
  public readonly notificationDestinations?: NotificationDestinations[];

  /**
   * Specifies the organizational units that this workspace is allowed to use data sources from, if
   * this workspace is in an account that is part of an organization.
   */
  public readonly organizationalUnits?: string[];

  /**
   * The name of the IAM role that is used to access resources through Organizations.
   */
  public readonly organizationRoleName?: string;

  /**
   * If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana
   * console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the
   * permissions that the workspace needs to use AWS data sources and notification channels.
   *
   * If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.
   *
   * If you are working with a workspace in a member account of an organization and that account is
   * not a delegated administrator account, and you want the workspace to access data sources in
   * other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.
   */
  public readonly permissionType: PermissionTypes;

  /**
   * Whether plugin administration is enabled in the workspace. Setting to true allows workspace
   * admins to install, uninstall, and update plugins from within the Grafana workspace.
   *
   * This option is only valid for workspaces that support Grafana version 9 or newer.
   */
  public readonly pluginAdminEnabled?: boolean;

  /**
   * The IAM role that grants permissions to the AWS resources that the workspace will view data
   * from.
   */
  public readonly role?: IRole;

  /**
   * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace
   * user information and define which groups in the assertion attribute are to have the Admin and
   * Editor roles in the workspace.
   */
  public readonly samlConfiguration?: SamlConfiguration;

  /**
   * The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for
   * this workspace.
   */
  public readonly stackSetName?: string;

  /**
   * The configuration settings for an Amazon VPC that contains data sources for your Grafana
   * workspace to connect to.
   */
  public readonly vpcConfiguration?: VpcConfiguration;

  /**
   * The underlying CloudFormation resource.
   */
  private readonly workspace: CfnWorkspace;

  /**
   * The date that the workspace was created.
   */
  public readonly creationTimestamp: string;

  /**
   * The URL that users can use to access the Grafana console in the workspace.
   */
  public readonly endpoint: string;

  /**
   * Specifies the version of Grafana supported by this workspace.
   */
  public readonly grafanaVersion: string;

  /**
   * The unique ID of this workspace.
   */
  public readonly id: string;

  /**
   * The most recent date that the workspace was modified.
   */
  public readonly modificationTimestamp: string;

  /**
   * Specifies whether the workspace's SAML configuration is complete.
   */
  public readonly samlConfigurationStatus: SamlConfigurationStatuses;

  /**
   * The ID of the IAM Identity Center-managed application that is created by Amazon Managed
   * Grafana.
   */
  public readonly ssoClientId: string;

  /**
   * The current status of the workspace.
   */
  public readonly status: Status;

  constructor(scope: Construct, id: string, props: WorkspaceProps) {
    super(scope, id);

    const errors = Workspace.validateProps(props);
    if (errors.length > 0) {
      throw new Error(`Invalid props:\n${errors.join('\n')}`);
    }

    if (
      props.accountAccessType === AccountAccessType.CURRENT_ACCOUNT &&
      !props.role
    ) {
      throw new Error(
        'Role must be provided when accountAccessType is CURRENT_ACCOUNT',
      );
    }

    this.accountAccessType = props.accountAccessType;
    this.authenticationProviders = props.authenticationProviders;
    this.clientToken = props.clientToken;
    this.dataSources = props.dataSources;
    this.description = props.description;
    this.networkAccessControl = props.networkAccessControl;
    this.notificationDestinations = props.notificationDestinations;
    this.organizationalUnits = props.organizationalUnits;
    this.organizationRoleName = props.organizationRoleName;
    this.permissionType = props.permissionType;
    this.pluginAdminEnabled = props.pluginAdminEnabled;
    this.name = props.name;
    this.role = props.role;
    this.samlConfiguration = props.samlConfiguration;
    this.stackSetName = props.stackSetName;
    this.vpcConfiguration = props.vpcConfiguration;

    let cfnWorkspaceProps: CfnWorkspaceProps = {
      accountAccessType: props.accountAccessType,
      authenticationProviders: props.authenticationProviders,
      clientToken: props.clientToken,
      dataSources: props.dataSources,
      description: props.description,
      grafanaVersion: props.grafanaVersion,
      name: props.name,
      notificationDestinations: props.notificationDestinations,
      organizationalUnits: props.organizationalUnits,
      organizationRoleName: props.organizationRoleName,
      permissionType: props.permissionType,
      pluginAdminEnabled: props.pluginAdminEnabled,
      roleArn: props.role?.roleArn,
      samlConfiguration: props.samlConfiguration,
      stackSetName: props.stackSetName,
      vpcConfiguration: props.vpcConfiguration
        ? {
          securityGroupIds: props.vpcConfiguration.securityGroups.map(
            (sg) => sg.securityGroupId,
          ),
          subnetIds: props.vpcConfiguration.subnets.map(
            (subnet) => subnet.subnetId,
          ),
        }
        : undefined,
    };

    this.workspace = new CfnWorkspace(this, 'Resource', cfnWorkspaceProps);
    this.creationTimestamp = this.workspace.attrCreationTimestamp;
    this.endpoint = this.workspace.attrEndpoint;
    this.grafanaVersion = this.workspace.attrGrafanaVersion;
    this.id = this.workspace.attrId;
    this.modificationTimestamp = this.workspace.attrModificationTimestamp;
    this.samlConfigurationStatus = this.workspace
      .attrSamlConfigurationStatus as SamlConfigurationStatuses;
    this.ssoClientId = this.workspace.attrSsoClientId;
    this.status = this.workspace.attrStatus as Status;
  }
}

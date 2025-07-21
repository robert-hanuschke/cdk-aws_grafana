import { IResource, Resource } from 'aws-cdk-lib';
import { IPrefixList, ISecurityGroup, ISubnet, IVpcEndpoint } from 'aws-cdk-lib/aws-ec2';
import { IRole } from 'aws-cdk-lib/aws-iam';

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
 * Represents an Amazon Managed Service for Grafana workspace
 */
export interface IWorkspace extends IResource {

  /**
   * Specifies whether the workspace can access AWS resources in this AWS account only, or whether
   * it can also access AWS resources in other accounts in the same organization. If this is
   * ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
   * workspace can access.
   */
  readonly accountAccessType: AccountAccessType;

  /**
   * Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to
   * authenticate users for using the Grafana console within a workspace.
   */
  readonly authenticationProviders: AuthenticationProviders[];

  /**
   * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  readonly clientToken?: string;

  /**
   * Specifies the AWS data sources that have been configured to have IAM roles and permissions
   * created to allow Amazon Managed Grafana to read data from these sources.
   *
   * This list is only used when the workspace was created through the AWS console, and the
   * permissionType is SERVICE_MANAGED.
   */
  readonly dataSources?: string[];

  /**
   * The user-defined description of the workspace.
   */
  readonly description?: string;

  /**
   * The name of the workspace.
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
   * The name of the IAM role that is used to access resources through Organizations.
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
   */
  readonly permissionType: PermissionTypes;

  /**
   * Whether plugin administration is enabled in the workspace. Setting to true allows workspace
   * admins to install, uninstall, and update plugins from within the Grafana workspace.
   *
   * This option is only valid for workspaces that support Grafana version 9 or newer.
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

  /**
   * The unique ID of this workspace.
   * @attribute
   */
  readonly workspaceId: string;

  /**
   * The ARN of this workspace
   * @attribute
   */
  readonly workspaceArn: string;
}

export abstract class WorkspaceBase extends Resource implements IWorkspace {

  /**
   * The account access type for the workspace.
   */
  public abstract readonly accountAccessType: AccountAccessType;

  /**
   * The authentication providers for the workspace.
   */
  public abstract readonly authenticationProviders: AuthenticationProviders[];

  /**
   * The client token for the workspace.
   */
  public abstract readonly clientToken?: string;

  /**
   * The data sources of this workspace
   */
  public abstract readonly dataSources?: string[];

  /**
   * The description of this workspace
   */
  public abstract readonly description?: string;

  /**
   * The name of this workspace
   */
  public abstract readonly name?: string;

  /**
   * The configuration settings for network access to your workspace.
   */
  public abstract readonly networkAccessControl?: NetworkAccessControl;

  /**
   * The notification destinations for the workspace.
   */
  public abstract readonly notificationDestinations?: NotificationDestinations[];

  /**
   * Specifies the organizational units that this workspace is allowed to use data sources from, if
   * this workspace is in an account that is part of an organization.
   */
  public abstract readonly organizationalUnits?: string[];

  /**
   * The name of the IAM role that is used to access resources through Organizations.
   */
  public abstract readonly organizationRoleName?: string;

  /**
   * The permission type for the workspace.
   */
  public abstract readonly permissionType: PermissionTypes;

  /**
   * Whether plugin administration is enabled in the workspace. Setting to true allows workspace
   * admins to install, uninstall, and update plugins from within the Grafana workspace.
   *
   * This option is only valid for workspaces that support Grafana version 9 or newer.
   */
  public abstract readonly pluginAdminEnabled?: boolean;

  /**
   * The IAM role that grants permissions to the AWS resources that the workspace will view data
   * from.
   */
  public abstract readonly role?: IRole;

  /**
   * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace
   * user information and define which groups in the assertion attribute are to have the Admin and
   * Editor roles in the workspace.
   */
  public abstract readonly samlConfiguration?: SamlConfiguration;

  /**
   * The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for
   * this workspace.
   */
  public abstract readonly stackSetName?: string;

  /**
   * The configuration settings for an Amazon VPC that contains data sources for your Grafana
   * workspace to connect to.
   */
  public abstract readonly vpcConfiguration?: VpcConfiguration;

  /**
   * The unique ID of this workspace.
   */
  public abstract readonly workspaceId: string;

  /**
   * The ARN of this workspace
   */
  public abstract readonly workspaceArn: string;

  protected getWorkspaceArn(workspaceId: string) {
    const stack = this.stack;
    return `arn:${stack.partition}:grafana:${stack.region}:${stack.account}:workspaces/${workspaceId}`;
  }

  protected getWorkspaceId(workspaceArn: string) {
    return workspaceArn.substring(workspaceArn.lastIndexOf('/') + 1);
  }
}
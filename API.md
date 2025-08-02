# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workspace <a name="Workspace" id="@robhan-cdk-lib/aws_grafana.Workspace"></a>

Specifies a workspace.

In a workspace, you can create Grafana dashboards and visualizations to
analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware
to run the Grafana server.

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_grafana.Workspace.Initializer"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_grafana'

new Workspace(scope: Construct, id: string, props: WorkspaceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.Initializer.parameter.props">props</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps">WorkspaceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_grafana.Workspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_grafana.Workspace.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@robhan-cdk-lib/aws_grafana.Workspace.Initializer.parameter.props"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps">WorkspaceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_grafana.Workspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_grafana.Workspace.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_grafana.Workspace.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.fromWorkspaceAttributes">fromWorkspaceAttributes</a></code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.isWorkspace">isWorkspace</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@robhan-cdk-lib/aws_grafana.Workspace.isConstruct"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_grafana'

Workspace.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_grafana.Workspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_grafana.Workspace.isOwnedResource"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_grafana'

Workspace.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_grafana.Workspace.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_grafana.Workspace.isResource"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_grafana'

Workspace.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_grafana.Workspace.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromWorkspaceAttributes` <a name="fromWorkspaceAttributes" id="@robhan-cdk-lib/aws_grafana.Workspace.fromWorkspaceAttributes"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_grafana'

Workspace.fromWorkspaceAttributes(scope: Construct, id: string, attrs: WorkspaceAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_grafana.Workspace.fromWorkspaceAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_grafana.Workspace.fromWorkspaceAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@robhan-cdk-lib/aws_grafana.Workspace.fromWorkspaceAttributes.parameter.attrs"></a>

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes">WorkspaceAttributes</a>

---

##### `isWorkspace` <a name="isWorkspace" id="@robhan-cdk-lib/aws_grafana.Workspace.isWorkspace"></a>

```typescript
import { Workspace } from '@robhan-cdk-lib/aws_grafana'

Workspace.isWorkspace(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_grafana.Workspace.isWorkspace.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.accountAccessType">accountAccessType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a></code> | Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.authenticationProviders">authenticationProviders</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]</code> | Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.permissionType">permissionType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a></code> | If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The arn of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.clientToken">clientToken</a></code> | <code>string</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.dataSources">dataSources</a></code> | <code>string[]</code> | Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.description">description</a></code> | <code>string</code> | The user-defined description of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.name">name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a></code> | The configuration settings for network access to your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.notificationDestinations">notificationDestinations</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]</code> | The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | The name of the IAM role that is used to access resources through Organizations. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>boolean</code> | Whether plugin administration is enabled in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role that grants permissions to the AWS resources that the workspace will view data from. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a></code> | If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.stackSetName">stackSetName</a></code> | <code>string</code> | The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | The date that the workspace was created. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.endpoint">endpoint</a></code> | <code>string</code> | The URL that users can use to access the Grafana console in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | Specifies the version of Grafana supported by this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.modificationTimestamp">modificationTimestamp</a></code> | <code>string</code> | The most recent date that the workspace was modified. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.samlConfigurationStatus">samlConfigurationStatus</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfigurationStatuses">SamlConfigurationStatuses</a></code> | Specifies whether the workspace's SAML configuration is complete. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.ssoClientId">ssoClientId</a></code> | <code>string</code> | The ID of the IAM Identity Center-managed application that is created by Amazon Managed Grafana. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Workspace.property.status">status</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.Status">Status</a></code> | The current status of the workspace. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_grafana.Workspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_grafana.Workspace.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_grafana.Workspace.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@robhan-cdk-lib/aws_grafana.Workspace.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: AccountAccessType;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a>

Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization.

If this is
ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
workspace can access.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@robhan-cdk-lib/aws_grafana.Workspace.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: AuthenticationProviders[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]

Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@robhan-cdk-lib/aws_grafana.Workspace.property.permissionType"></a>

```typescript
public readonly permissionType: PermissionTypes;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a>

If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.

If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.

If you are working with a workspace in a member account of an organization and that account is
not a delegated administrator account, and you want the workspace to access data sources in
other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_grafana.Workspace.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The arn of this workspace.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@robhan-cdk-lib/aws_grafana.Workspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The unique ID of this workspace.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@robhan-cdk-lib/aws_grafana.Workspace.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@robhan-cdk-lib/aws_grafana.Workspace.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.

This list is only used when the workspace was created through the AWS console, and the
permissionType is SERVICE_MANAGED.

---

##### `description`<sup>Optional</sup> <a name="description" id="@robhan-cdk-lib/aws_grafana.Workspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-defined description of the workspace.

---

##### `name`<sup>Optional</sup> <a name="name" id="@robhan-cdk-lib/aws_grafana.Workspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace.

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@robhan-cdk-lib/aws_grafana.Workspace.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: NetworkAccessControl;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a>

The configuration settings for network access to your workspace.

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@robhan-cdk-lib/aws_grafana.Workspace.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: NotificationDestinations[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]

The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@robhan-cdk-lib/aws_grafana.Workspace.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@robhan-cdk-lib/aws_grafana.Workspace.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

The name of the IAM role that is used to access resources through Organizations.

---

##### `pluginAdminEnabled`<sup>Optional</sup> <a name="pluginAdminEnabled" id="@robhan-cdk-lib/aws_grafana.Workspace.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: boolean;
```

- *Type:* boolean

Whether plugin administration is enabled in the workspace.

Setting to true allows workspace
admins to install, uninstall, and update plugins from within the Grafana workspace.

This option is only valid for workspaces that support Grafana version 9 or newer.

---

##### `role`<sup>Optional</sup> <a name="role" id="@robhan-cdk-lib/aws_grafana.Workspace.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role that grants permissions to the AWS resources that the workspace will view data from.

---

##### `samlConfiguration`<sup>Optional</sup> <a name="samlConfiguration" id="@robhan-cdk-lib/aws_grafana.Workspace.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: SamlConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a>

If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@robhan-cdk-lib/aws_grafana.Workspace.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@robhan-cdk-lib/aws_grafana.Workspace.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: VpcConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@robhan-cdk-lib/aws_grafana.Workspace.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

The date that the workspace was created.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@robhan-cdk-lib/aws_grafana.Workspace.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The URL that users can use to access the Grafana console in the workspace.

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@robhan-cdk-lib/aws_grafana.Workspace.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

Specifies the version of Grafana supported by this workspace.

---

##### `modificationTimestamp`<sup>Required</sup> <a name="modificationTimestamp" id="@robhan-cdk-lib/aws_grafana.Workspace.property.modificationTimestamp"></a>

```typescript
public readonly modificationTimestamp: string;
```

- *Type:* string

The most recent date that the workspace was modified.

---

##### `samlConfigurationStatus`<sup>Required</sup> <a name="samlConfigurationStatus" id="@robhan-cdk-lib/aws_grafana.Workspace.property.samlConfigurationStatus"></a>

```typescript
public readonly samlConfigurationStatus: SamlConfigurationStatuses;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlConfigurationStatuses">SamlConfigurationStatuses</a>

Specifies whether the workspace's SAML configuration is complete.

---

##### `ssoClientId`<sup>Required</sup> <a name="ssoClientId" id="@robhan-cdk-lib/aws_grafana.Workspace.property.ssoClientId"></a>

```typescript
public readonly ssoClientId: string;
```

- *Type:* string

The ID of the IAM Identity Center-managed application that is created by Amazon Managed Grafana.

---

##### `status`<sup>Required</sup> <a name="status" id="@robhan-cdk-lib/aws_grafana.Workspace.property.status"></a>

```typescript
public readonly status: Status;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.Status">Status</a>

The current status of the workspace.

---


### WorkspaceBase <a name="WorkspaceBase" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase"></a>

- *Implements:* <a href="#@robhan-cdk-lib/aws_grafana.IWorkspace">IWorkspace</a>

#### Initializers <a name="Initializers" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.Initializer"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_grafana'

new WorkspaceBase(scope: Construct, id: string, props?: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.ResourceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.ResourceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.isConstruct"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_grafana'

WorkspaceBase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.isOwnedResource"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_grafana'

WorkspaceBase.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.isResource"></a>

```typescript
import { WorkspaceBase } from '@robhan-cdk-lib/aws_grafana'

WorkspaceBase.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.accountAccessType">accountAccessType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a></code> | The account access type for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.authenticationProviders">authenticationProviders</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]</code> | The authentication providers for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.permissionType">permissionType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a></code> | The permission type for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.clientToken">clientToken</a></code> | <code>string</code> | The client token for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.dataSources">dataSources</a></code> | <code>string[]</code> | The data sources of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.description">description</a></code> | <code>string</code> | The description of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.name">name</a></code> | <code>string</code> | The name of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a></code> | The configuration settings for network access to your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.notificationDestinations">notificationDestinations</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]</code> | The notification destinations for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | The name of the IAM role that is used to access resources through Organizations. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>boolean</code> | Whether plugin administration is enabled in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role that grants permissions to the AWS resources that the workspace will view data from. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a></code> | If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.stackSetName">stackSetName</a></code> | <code>string</code> | The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: AccountAccessType;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a>

The account access type for the workspace.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: AuthenticationProviders[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]

The authentication providers for the workspace.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.permissionType"></a>

```typescript
public readonly permissionType: PermissionTypes;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a>

The permission type for the workspace.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of this workspace.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The unique ID of this workspace.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

The client token for the workspace.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

The data sources of this workspace.

---

##### `description`<sup>Optional</sup> <a name="description" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of this workspace.

---

##### `name`<sup>Optional</sup> <a name="name" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of this workspace.

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: NetworkAccessControl;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a>

The configuration settings for network access to your workspace.

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: NotificationDestinations[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]

The notification destinations for the workspace.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

The name of the IAM role that is used to access resources through Organizations.

---

##### `pluginAdminEnabled`<sup>Optional</sup> <a name="pluginAdminEnabled" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: boolean;
```

- *Type:* boolean

Whether plugin administration is enabled in the workspace.

Setting to true allows workspace
admins to install, uninstall, and update plugins from within the Grafana workspace.

This option is only valid for workspaces that support Grafana version 9 or newer.

---

##### `role`<sup>Optional</sup> <a name="role" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role that grants permissions to the AWS resources that the workspace will view data from.

---

##### `samlConfiguration`<sup>Optional</sup> <a name="samlConfiguration" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: SamlConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a>

If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@robhan-cdk-lib/aws_grafana.WorkspaceBase.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: VpcConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

---


## Structs <a name="Structs" id="Structs"></a>

### NetworkAccessControl <a name="NetworkAccessControl" id="@robhan-cdk-lib/aws_grafana.NetworkAccessControl"></a>

The configuration settings for network access to your workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.NetworkAccessControl.Initializer"></a>

```typescript
import { NetworkAccessControl } from '@robhan-cdk-lib/aws_grafana'

const networkAccessControl: NetworkAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl.property.prefixLists">prefixLists</a></code> | <code>aws-cdk-lib.aws_ec2.IPrefixList[]</code> | An array of prefix list IDs. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl.property.vpcEndpoints">vpcEndpoints</a></code> | <code>aws-cdk-lib.aws_ec2.IVpcEndpoint[]</code> | An array of Amazon VPC endpoint IDs for the workspace. |

---

##### `prefixLists`<sup>Optional</sup> <a name="prefixLists" id="@robhan-cdk-lib/aws_grafana.NetworkAccessControl.property.prefixLists"></a>

```typescript
public readonly prefixLists: IPrefixList[];
```

- *Type:* aws-cdk-lib.aws_ec2.IPrefixList[]

An array of prefix list IDs.

A prefix list is a list of CIDR ranges of IP addresses. The IP
addresses specified are allowed to access your workspace. If the list is not included in the
configuration (passed an empty array) then no IP addresses are allowed to access the
workspace.

Maximum of 5 prefix lists allowed.

---

##### `vpcEndpoints`<sup>Optional</sup> <a name="vpcEndpoints" id="@robhan-cdk-lib/aws_grafana.NetworkAccessControl.property.vpcEndpoints"></a>

```typescript
public readonly vpcEndpoints: IVpcEndpoint[];
```

- *Type:* aws-cdk-lib.aws_ec2.IVpcEndpoint[]

An array of Amazon VPC endpoint IDs for the workspace.

You can create VPC endpoints to your
Amazon Managed Grafana workspace for access from within a VPC. If a NetworkAccessConfiguration
is specified then only VPC endpoints specified here are allowed to access the workspace. If
you pass in an empty array of strings, then no VPCs are allowed to access the workspace.

Maximum of 5 VPC endpoints allowed.

---

### SamlAssertionAttributes <a name="SamlAssertionAttributes" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes"></a>

A structure that defines which attributes in the IdP assertion are to be used to define information about the users authenticated by the IdP to use the workspace.

Each attribute must be a string with length between 1 and 256 characters.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.Initializer"></a>

```typescript
import { SamlAssertionAttributes } from '@robhan-cdk-lib/aws_grafana'

const samlAssertionAttributes: SamlAssertionAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.email">email</a></code> | <code>string</code> | The name of the attribute within the SAML assertion to use as the email names for SAML users. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.groups">groups</a></code> | <code>string</code> | The name of the attribute within the SAML assertion to use as the user full "friendly" names for user groups. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.login">login</a></code> | <code>string</code> | The name of the attribute within the SAML assertion to use as the login names for SAML users. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.name">name</a></code> | <code>string</code> | The name of the attribute within the SAML assertion to use as the user full "friendly" names for SAML users. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.org">org</a></code> | <code>string</code> | The name of the attribute within the SAML assertion to use as the user full "friendly" names for the users' organizations. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.role">role</a></code> | <code>string</code> | The name of the attribute within the SAML assertion to use as the user roles. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

The name of the attribute within the SAML assertion to use as the email names for SAML users.

Must be between 1 and 256 characters long.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.groups"></a>

```typescript
public readonly groups: string;
```

- *Type:* string

The name of the attribute within the SAML assertion to use as the user full "friendly" names for user groups.

Must be between 1 and 256 characters long.

---

##### `login`<sup>Optional</sup> <a name="login" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

The name of the attribute within the SAML assertion to use as the login names for SAML users.

Must be between 1 and 256 characters long.

---

##### `name`<sup>Optional</sup> <a name="name" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the attribute within the SAML assertion to use as the user full "friendly" names for SAML users.

Must be between 1 and 256 characters long.

---

##### `org`<sup>Optional</sup> <a name="org" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.org"></a>

```typescript
public readonly org: string;
```

- *Type:* string

The name of the attribute within the SAML assertion to use as the user full "friendly" names for the users' organizations.

Must be between 1 and 256 characters long.

---

##### `role`<sup>Optional</sup> <a name="role" id="@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

The name of the attribute within the SAML assertion to use as the user roles.

Must be between 1 and 256 characters long.

---

### SamlConfiguration <a name="SamlConfiguration" id="@robhan-cdk-lib/aws_grafana.SamlConfiguration"></a>

If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.SamlConfiguration.Initializer"></a>

```typescript
import { SamlConfiguration } from '@robhan-cdk-lib/aws_grafana'

const samlConfiguration: SamlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.idpMetadata">idpMetadata</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlIdpMetadata">SamlIdpMetadata</a></code> | A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.allowedOrganizations">allowedOrganizations</a></code> | <code>string[]</code> | Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed Grafana workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.assertionAtrributes">assertionAtrributes</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes">SamlAssertionAttributes</a></code> | A structure that defines which attributes in the SAML assertion are to be used to define information about the users authenticated by that IdP to use the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.loginValidityDuration">loginValidityDuration</a></code> | <code>number</code> | How long a sign-on session by a SAML user is valid, before the user has to sign on again. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.roleValues">roleValues</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlRoleValues">SamlRoleValues</a></code> | A structure containing arrays that map group names in the SAML assertion to the Grafana Admin and Editor roles in the workspace. |

---

##### `idpMetadata`<sup>Required</sup> <a name="idpMetadata" id="@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.idpMetadata"></a>

```typescript
public readonly idpMetadata: SamlIdpMetadata;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlIdpMetadata">SamlIdpMetadata</a>

A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace.

Required field for SAML configuration.

---

##### `allowedOrganizations`<sup>Optional</sup> <a name="allowedOrganizations" id="@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.allowedOrganizations"></a>

```typescript
public readonly allowedOrganizations: string[];
```

- *Type:* string[]

Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed Grafana workspace.

If this is empty, all organizations in the assertion attribute have access.

Must have between 1 and 256 elements.

---

##### `assertionAtrributes`<sup>Optional</sup> <a name="assertionAtrributes" id="@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.assertionAtrributes"></a>

```typescript
public readonly assertionAtrributes: SamlAssertionAttributes;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlAssertionAttributes">SamlAssertionAttributes</a>

A structure that defines which attributes in the SAML assertion are to be used to define information about the users authenticated by that IdP to use the workspace.

---

##### `loginValidityDuration`<sup>Optional</sup> <a name="loginValidityDuration" id="@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.loginValidityDuration"></a>

```typescript
public readonly loginValidityDuration: number;
```

- *Type:* number

How long a sign-on session by a SAML user is valid, before the user has to sign on again.

Must be a positive number.

---

##### `roleValues`<sup>Optional</sup> <a name="roleValues" id="@robhan-cdk-lib/aws_grafana.SamlConfiguration.property.roleValues"></a>

```typescript
public readonly roleValues: SamlRoleValues;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlRoleValues">SamlRoleValues</a>

A structure containing arrays that map group names in the SAML assertion to the Grafana Admin and Editor roles in the workspace.

---

### SamlIdpMetadata <a name="SamlIdpMetadata" id="@robhan-cdk-lib/aws_grafana.SamlIdpMetadata"></a>

A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.SamlIdpMetadata.Initializer"></a>

```typescript
import { SamlIdpMetadata } from '@robhan-cdk-lib/aws_grafana'

const samlIdpMetadata: SamlIdpMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlIdpMetadata.property.url">url</a></code> | <code>string</code> | The URL of the location containing the IdP metadata. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlIdpMetadata.property.xml">xml</a></code> | <code>string</code> | The full IdP metadata, in XML format. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@robhan-cdk-lib/aws_grafana.SamlIdpMetadata.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL of the location containing the IdP metadata.

Must be a string with length between 1 and 2048 characters.

---

##### `xml`<sup>Optional</sup> <a name="xml" id="@robhan-cdk-lib/aws_grafana.SamlIdpMetadata.property.xml"></a>

```typescript
public readonly xml: string;
```

- *Type:* string

The full IdP metadata, in XML format.

---

### SamlRoleValues <a name="SamlRoleValues" id="@robhan-cdk-lib/aws_grafana.SamlRoleValues"></a>

A structure containing arrays that map group names in the SAML assertion to the Grafana Admin and Editor roles in the workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.SamlRoleValues.Initializer"></a>

```typescript
import { SamlRoleValues } from '@robhan-cdk-lib/aws_grafana'

const samlRoleValues: SamlRoleValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlRoleValues.property.admin">admin</a></code> | <code>string[]</code> | A list of groups from the SAML assertion attribute to grant the Grafana Admin role to. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlRoleValues.property.editor">editor</a></code> | <code>string[]</code> | A list of groups from the SAML assertion attribute to grant the Grafana Editor role to. |

---

##### `admin`<sup>Optional</sup> <a name="admin" id="@robhan-cdk-lib/aws_grafana.SamlRoleValues.property.admin"></a>

```typescript
public readonly admin: string[];
```

- *Type:* string[]

A list of groups from the SAML assertion attribute to grant the Grafana Admin role to.

Maximum of 256 elements.

---

##### `editor`<sup>Optional</sup> <a name="editor" id="@robhan-cdk-lib/aws_grafana.SamlRoleValues.property.editor"></a>

```typescript
public readonly editor: string[];
```

- *Type:* string[]

A list of groups from the SAML assertion attribute to grant the Grafana Editor role to.

Maximum of 256 elements.

---

### VpcConfiguration <a name="VpcConfiguration" id="@robhan-cdk-lib/aws_grafana.VpcConfiguration"></a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.VpcConfiguration.Initializer"></a>

```typescript
import { VpcConfiguration } from '@robhan-cdk-lib/aws_grafana'

const vpcConfiguration: VpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of Amazon EC2 security groups attached to the Amazon VPC for your Grafana workspace to connect. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.ISubnet[]</code> | The list of Amazon EC2 subnets created in the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed. |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@robhan-cdk-lib/aws_grafana.VpcConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The list of Amazon EC2 security groups attached to the Amazon VPC for your Grafana workspace to connect.

Duplicates not allowed.

Array Members: Minimum number of 1 items. Maximum number of 5 items.

Required for VPC configuration.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@robhan-cdk-lib/aws_grafana.VpcConfiguration.property.subnets"></a>

```typescript
public readonly subnets: ISubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISubnet[]

The list of Amazon EC2 subnets created in the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed.

Array Members: Minimum number of 2 items. Maximum number of 6 items.

Required for VPC configuration.

---

### WorkspaceAttributes <a name="WorkspaceAttributes" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes"></a>

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.Initializer"></a>

```typescript
import { WorkspaceAttributes } from '@robhan-cdk-lib/aws_grafana'

const workspaceAttributes: WorkspaceAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.accountAccessType">accountAccessType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a></code> | Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.authenticationProviders">authenticationProviders</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]</code> | Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.permissionType">permissionType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a></code> | If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The arn of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.clientToken">clientToken</a></code> | <code>string</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.dataSources">dataSources</a></code> | <code>string[]</code> | Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.description">description</a></code> | <code>string</code> | The user-defined description of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.name">name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a></code> | The configuration settings for network access to your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.notificationDestinations">notificationDestinations</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]</code> | The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | Name of the IAM role to use for the organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>boolean</code> | Whether plugin administration is enabled in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role that grants permissions to the AWS resources that the workspace will view data from. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a></code> | If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.stackSetName">stackSetName</a></code> | <code>string</code> | The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: AccountAccessType;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a>

Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization.

If this is
ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
workspace can access.

Required field.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: AuthenticationProviders[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]

Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace.

Required field.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.permissionType"></a>

```typescript
public readonly permissionType: PermissionTypes;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a>

If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.

If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.

If you are working with a workspace in a member account of an organization and that account is
not a delegated administrator account, and you want the workspace to access data sources in
other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.

Required field.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The arn of this workspace.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

Must be 1-64 characters long and contain only printable ASCII characters.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.

This list is only used when the workspace was created through the AWS console, and the
permissionType is SERVICE_MANAGED.

---

##### `description`<sup>Optional</sup> <a name="description" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-defined description of the workspace.

Maximum length of 2048 characters.

---

##### `name`<sup>Optional</sup> <a name="name" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace.

Must be 1-255 characters long and contain only alphanumeric characters, hyphens, dots,
underscores, and tildes.

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: NetworkAccessControl;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a>

The configuration settings for network access to your workspace.

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: NotificationDestinations[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]

The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

Name of the IAM role to use for the organization.

Maximum length of 2048 characters.

---

##### `pluginAdminEnabled`<sup>Optional</sup> <a name="pluginAdminEnabled" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: boolean;
```

- *Type:* boolean

Whether plugin administration is enabled in the workspace.

Setting to true allows workspace
admins to install, uninstall, and update plugins from within the Grafana workspace.

This option is only valid for workspaces that support Grafana version 9 or newer.

Default: false

---

##### `role`<sup>Optional</sup> <a name="role" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role that grants permissions to the AWS resources that the workspace will view data from.

---

##### `samlConfiguration`<sup>Optional</sup> <a name="samlConfiguration" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: SamlConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a>

If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@robhan-cdk-lib/aws_grafana.WorkspaceAttributes.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: VpcConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

---

### WorkspaceProps <a name="WorkspaceProps" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps"></a>

Properties for creating an Amazon Managed Grafana workspace.

#### Initializer <a name="Initializer" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.Initializer"></a>

```typescript
import { WorkspaceProps } from '@robhan-cdk-lib/aws_grafana'

const workspaceProps: WorkspaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.accountAccessType">accountAccessType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a></code> | Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.authenticationProviders">authenticationProviders</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]</code> | Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.permissionType">permissionType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a></code> | If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.clientToken">clientToken</a></code> | <code>string</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.dataSources">dataSources</a></code> | <code>string[]</code> | Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.description">description</a></code> | <code>string</code> | The user-defined description of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.grafanaVersion">grafanaVersion</a></code> | <code>string</code> | Specifies the version of Grafana to support in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.name">name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a></code> | The configuration settings for network access to your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.notificationDestinations">notificationDestinations</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]</code> | The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | Name of the IAM role to use for the organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>boolean</code> | Whether plugin administration is enabled in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role that grants permissions to the AWS resources that the workspace will view data from. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a></code> | If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.stackSetName">stackSetName</a></code> | <code>string</code> | The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: AccountAccessType;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a>

Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization.

If this is
ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
workspace can access.

Required field.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: AuthenticationProviders[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]

Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace.

Required field.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.permissionType"></a>

```typescript
public readonly permissionType: PermissionTypes;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a>

If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.

If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.

If you are working with a workspace in a member account of an organization and that account is
not a delegated administrator account, and you want the workspace to access data sources in
other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.

Required field.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

Must be 1-64 characters long and contain only printable ASCII characters.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.

This list is only used when the workspace was created through the AWS console, and the
permissionType is SERVICE_MANAGED.

---

##### `description`<sup>Optional</sup> <a name="description" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-defined description of the workspace.

Maximum length of 2048 characters.

---

##### `grafanaVersion`<sup>Optional</sup> <a name="grafanaVersion" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.grafanaVersion"></a>

```typescript
public readonly grafanaVersion: string;
```

- *Type:* string

Specifies the version of Grafana to support in the workspace.

Defaults to the latest version
on create (for example, 9.4), or the current version of the workspace on update.
Can only be used to upgrade (for example, from 8.4 to 9.4), not downgrade (for example, from
9.4 to 8.4).

Must be 1-255 characters long.

---

##### `name`<sup>Optional</sup> <a name="name" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace.

Must be 1-255 characters long and contain only alphanumeric characters, hyphens, dots,
underscores, and tildes.

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: NetworkAccessControl;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a>

The configuration settings for network access to your workspace.

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: NotificationDestinations[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]

The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

Name of the IAM role to use for the organization.

Maximum length of 2048 characters.

---

##### `pluginAdminEnabled`<sup>Optional</sup> <a name="pluginAdminEnabled" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: boolean;
```

- *Type:* boolean

Whether plugin administration is enabled in the workspace.

Setting to true allows workspace
admins to install, uninstall, and update plugins from within the Grafana workspace.

This option is only valid for workspaces that support Grafana version 9 or newer.

Default: false

---

##### `role`<sup>Optional</sup> <a name="role" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role that grants permissions to the AWS resources that the workspace will view data from.

---

##### `samlConfiguration`<sup>Optional</sup> <a name="samlConfiguration" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: SamlConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a>

If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@robhan-cdk-lib/aws_grafana.WorkspaceProps.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: VpcConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IWorkspace <a name="IWorkspace" id="@robhan-cdk-lib/aws_grafana.IWorkspace"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@robhan-cdk-lib/aws_grafana.Workspace">Workspace</a>, <a href="#@robhan-cdk-lib/aws_grafana.WorkspaceBase">WorkspaceBase</a>, <a href="#@robhan-cdk-lib/aws_grafana.IWorkspace">IWorkspace</a>

Represents an Amazon Managed Service for Grafana workspace.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.accountAccessType">accountAccessType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a></code> | Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.authenticationProviders">authenticationProviders</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]</code> | Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.permissionType">permissionType</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a></code> | If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.workspaceArn">workspaceArn</a></code> | <code>string</code> | The ARN of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | The unique ID of this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.clientToken">clientToken</a></code> | <code>string</code> | A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.dataSources">dataSources</a></code> | <code>string[]</code> | Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.description">description</a></code> | <code>string</code> | The user-defined description of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.name">name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a></code> | The configuration settings for network access to your workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.notificationDestinations">notificationDestinations</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]</code> | The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.organizationRoleName">organizationRoleName</a></code> | <code>string</code> | The name of the IAM role that is used to access resources through Organizations. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.pluginAdminEnabled">pluginAdminEnabled</a></code> | <code>boolean</code> | Whether plugin administration is enabled in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role that grants permissions to the AWS resources that the workspace will view data from. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a></code> | If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.stackSetName">stackSetName</a></code> | <code>string</code> | The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.IWorkspace.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a></code> | The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.accountAccessType"></a>

```typescript
public readonly accountAccessType: AccountAccessType;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType">AccountAccessType</a>

Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization.

If this is
ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
workspace can access.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.authenticationProviders"></a>

```typescript
public readonly authenticationProviders: AuthenticationProviders[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders">AuthenticationProviders</a>[]

Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.permissionType"></a>

```typescript
public readonly permissionType: PermissionTypes;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes">PermissionTypes</a>

If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.

If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.

If you are working with a workspace in a member account of an organization and that account is
not a delegated administrator account, and you want the workspace to access data sources in
other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.workspaceArn"></a>

```typescript
public readonly workspaceArn: string;
```

- *Type:* string

The ARN of this workspace.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The unique ID of this workspace.

---

##### `clientToken`<sup>Optional</sup> <a name="clientToken" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.dataSources"></a>

```typescript
public readonly dataSources: string[];
```

- *Type:* string[]

Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.

This list is only used when the workspace was created through the AWS console, and the
permissionType is SERVICE_MANAGED.

---

##### `description`<sup>Optional</sup> <a name="description" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The user-defined description of the workspace.

---

##### `name`<sup>Optional</sup> <a name="name" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace.

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.networkAccessControl"></a>

```typescript
public readonly networkAccessControl: NetworkAccessControl;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NetworkAccessControl">NetworkAccessControl</a>

The configuration settings for network access to your workspace.

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.notificationDestinations"></a>

```typescript
public readonly notificationDestinations: NotificationDestinations[];
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations">NotificationDestinations</a>[]

The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.organizationRoleName"></a>

```typescript
public readonly organizationRoleName: string;
```

- *Type:* string

The name of the IAM role that is used to access resources through Organizations.

---

##### `pluginAdminEnabled`<sup>Optional</sup> <a name="pluginAdminEnabled" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.pluginAdminEnabled"></a>

```typescript
public readonly pluginAdminEnabled: boolean;
```

- *Type:* boolean

Whether plugin administration is enabled in the workspace.

Setting to true allows workspace
admins to install, uninstall, and update plugins from within the Grafana workspace.

This option is only valid for workspaces that support Grafana version 9 or newer.

---

##### `role`<sup>Optional</sup> <a name="role" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role that grants permissions to the AWS resources that the workspace will view data from.

---

##### `samlConfiguration`<sup>Optional</sup> <a name="samlConfiguration" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: SamlConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.SamlConfiguration">SamlConfiguration</a>

If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@robhan-cdk-lib/aws_grafana.IWorkspace.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: VpcConfiguration;
```

- *Type:* <a href="#@robhan-cdk-lib/aws_grafana.VpcConfiguration">VpcConfiguration</a>

The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.

---

## Enums <a name="Enums" id="Enums"></a>

### AccountAccessType <a name="AccountAccessType" id="@robhan-cdk-lib/aws_grafana.AccountAccessType"></a>

Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization.

If this is
ORGANIZATION, the OrganizationalUnits parameter specifies which organizational units the
workspace can access.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType.CURRENT_ACCOUNT">CURRENT_ACCOUNT</a></code> | Access is limited to the current AWS account only. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.AccountAccessType.ORGANIZATION">ORGANIZATION</a></code> | Access is extended to the entire AWS organization. |

---

##### `CURRENT_ACCOUNT` <a name="CURRENT_ACCOUNT" id="@robhan-cdk-lib/aws_grafana.AccountAccessType.CURRENT_ACCOUNT"></a>

Access is limited to the current AWS account only.

---


##### `ORGANIZATION` <a name="ORGANIZATION" id="@robhan-cdk-lib/aws_grafana.AccountAccessType.ORGANIZATION"></a>

Access is extended to the entire AWS organization.

---


### AuthenticationProviders <a name="AuthenticationProviders" id="@robhan-cdk-lib/aws_grafana.AuthenticationProviders"></a>

Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center, or both to authenticate users for using the Grafana console within a workspace.

> [https://docs.aws.amazon.com/grafana/latest/APIReference/API_CreateWorkspace.html](https://docs.aws.amazon.com/grafana/latest/APIReference/API_CreateWorkspace.html)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders.AWS_SSO">AWS_SSO</a></code> | AWS Single Sign-On authentication provider. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.AuthenticationProviders.SAML">SAML</a></code> | Security Assertion Markup Language (SAML) authentication provider. |

---

##### `AWS_SSO` <a name="AWS_SSO" id="@robhan-cdk-lib/aws_grafana.AuthenticationProviders.AWS_SSO"></a>

AWS Single Sign-On authentication provider.

---


##### `SAML` <a name="SAML" id="@robhan-cdk-lib/aws_grafana.AuthenticationProviders.SAML"></a>

Security Assertion Markup Language (SAML) authentication provider.

---


### NotificationDestinations <a name="NotificationDestinations" id="@robhan-cdk-lib/aws_grafana.NotificationDestinations"></a>

The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.NotificationDestinations.SNS">SNS</a></code> | Amazon Simple Notification Service (SNS) as notification destination. |

---

##### `SNS` <a name="SNS" id="@robhan-cdk-lib/aws_grafana.NotificationDestinations.SNS"></a>

Amazon Simple Notification Service (SNS) as notification destination.

---


### PermissionTypes <a name="PermissionTypes" id="@robhan-cdk-lib/aws_grafana.PermissionTypes"></a>

If this is SERVICE_MANAGED, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.

If this is CUSTOMER_MANAGED, you must manage those roles and permissions yourself.

If you are working with a workspace in a member account of an organization and that account is
not a delegated administrator account, and you want the workspace to access data sources in
other AWS accounts in the organization, this parameter must be set to CUSTOMER_MANAGED.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes.CUSTOMER_MANAGED">CUSTOMER_MANAGED</a></code> | Customer-managed permissions where you manage user access to Grafana. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.PermissionTypes.SERVICE_MANAGED">SERVICE_MANAGED</a></code> | Service-managed permissions where AWS manages user access to Grafana. |

---

##### `CUSTOMER_MANAGED` <a name="CUSTOMER_MANAGED" id="@robhan-cdk-lib/aws_grafana.PermissionTypes.CUSTOMER_MANAGED"></a>

Customer-managed permissions where you manage user access to Grafana.

---


##### `SERVICE_MANAGED` <a name="SERVICE_MANAGED" id="@robhan-cdk-lib/aws_grafana.PermissionTypes.SERVICE_MANAGED"></a>

Service-managed permissions where AWS manages user access to Grafana.

---


### SamlConfigurationStatuses <a name="SamlConfigurationStatuses" id="@robhan-cdk-lib/aws_grafana.SamlConfigurationStatuses"></a>

Status of SAML configuration for a Grafana workspace.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfigurationStatuses.CONFIGURED">CONFIGURED</a></code> | SAML is configured for the workspace. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.SamlConfigurationStatuses.NOT_CONFIGURED">NOT_CONFIGURED</a></code> | SAML is not configured for the workspace. |

---

##### `CONFIGURED` <a name="CONFIGURED" id="@robhan-cdk-lib/aws_grafana.SamlConfigurationStatuses.CONFIGURED"></a>

SAML is configured for the workspace.

---


##### `NOT_CONFIGURED` <a name="NOT_CONFIGURED" id="@robhan-cdk-lib/aws_grafana.SamlConfigurationStatuses.NOT_CONFIGURED"></a>

SAML is not configured for the workspace.

---


### Status <a name="Status" id="@robhan-cdk-lib/aws_grafana.Status"></a>

Status of a Grafana workspace.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.ACTIVE">ACTIVE</a></code> | Workspace is active and ready to use. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.CREATING">CREATING</a></code> | Workspace is being created. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.DELETING">DELETING</a></code> | Workspace is being deleted. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.FAILED">FAILED</a></code> | Workspace operation has failed. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.UPDATING">UPDATING</a></code> | Workspace is being updated. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.UPGRADING">UPGRADING</a></code> | Workspace is being upgraded. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.DELETION_FAILED">DELETION_FAILED</a></code> | Workspace deletion has failed. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.CREATION_FAILED">CREATION_FAILED</a></code> | Workspace creation has failed. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.UPDATE_FAILED">UPDATE_FAILED</a></code> | Workspace update has failed. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.UPGRADE_FAILED">UPGRADE_FAILED</a></code> | Workspace upgrade has failed. |
| <code><a href="#@robhan-cdk-lib/aws_grafana.Status.LICENSE_REMOVAL_FAILED">LICENSE_REMOVAL_FAILED</a></code> | License removal has failed. |

---

##### `ACTIVE` <a name="ACTIVE" id="@robhan-cdk-lib/aws_grafana.Status.ACTIVE"></a>

Workspace is active and ready to use.

---


##### `CREATING` <a name="CREATING" id="@robhan-cdk-lib/aws_grafana.Status.CREATING"></a>

Workspace is being created.

---


##### `DELETING` <a name="DELETING" id="@robhan-cdk-lib/aws_grafana.Status.DELETING"></a>

Workspace is being deleted.

---


##### `FAILED` <a name="FAILED" id="@robhan-cdk-lib/aws_grafana.Status.FAILED"></a>

Workspace operation has failed.

---


##### `UPDATING` <a name="UPDATING" id="@robhan-cdk-lib/aws_grafana.Status.UPDATING"></a>

Workspace is being updated.

---


##### `UPGRADING` <a name="UPGRADING" id="@robhan-cdk-lib/aws_grafana.Status.UPGRADING"></a>

Workspace is being upgraded.

---


##### `DELETION_FAILED` <a name="DELETION_FAILED" id="@robhan-cdk-lib/aws_grafana.Status.DELETION_FAILED"></a>

Workspace deletion has failed.

---


##### `CREATION_FAILED` <a name="CREATION_FAILED" id="@robhan-cdk-lib/aws_grafana.Status.CREATION_FAILED"></a>

Workspace creation has failed.

---


##### `UPDATE_FAILED` <a name="UPDATE_FAILED" id="@robhan-cdk-lib/aws_grafana.Status.UPDATE_FAILED"></a>

Workspace update has failed.

---


##### `UPGRADE_FAILED` <a name="UPGRADE_FAILED" id="@robhan-cdk-lib/aws_grafana.Status.UPGRADE_FAILED"></a>

Workspace upgrade has failed.

---


##### `LICENSE_REMOVAL_FAILED` <a name="LICENSE_REMOVAL_FAILED" id="@robhan-cdk-lib/aws_grafana.Status.LICENSE_REMOVAL_FAILED"></a>

License removal has failed.

---


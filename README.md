# @robhan-cdk-lib/aws_grafana

AWS Cloud Development Kit (CDK) L2 constructs for Amazon Managed Grafana.

In [aws-cdk-lib.aws_grafana](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_grafana-readme.html), there currently only exist L1 constructs for Amazon Managed Grafana.

The CDK maintainers explain that [publishing your own package](https://github.com/aws/aws-cdk/blob/main/CONTRIBUTING.md#publishing-your-own-package) is "by far the strongest signal you can give to the CDK team that a feature should be included within the core aws-cdk packages".

This project aims to develop aws_grafana L2 constructs to a maturity that is accepted to the CDK core.

Currently, development is focusing on the npm package. But PyPI, Maven Central, NuGet, and GitHub (for Go) will be added once a more stable state is reached.

## Example use

```typescript
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  AccountAccessType,
  AuthenticationProviders,
  PermissionTypes,
  Workspace,
} from "@robhan-cdk-lib/aws_grafana";
import { Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";

export class AwsGrafanaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const grafanaRole = new Role(this, "GrafanaWorkspaceRole", {
      assumedBy: new ServicePrincipal("grafana.amazonaws.com"),
      description: "Role for Amazon Managed Grafana Workspace",
    });

    const workspace = new Workspace(this, "Workspace", {
      accountAccessType: AccountAccessType.CURRENT_ACCOUNT,
      authenticationProviders: [AuthenticationProviders.AWS_SSO],
      permissionType: PermissionTypes.SERVICE_MANAGED,
      role: grafanaRole,
    });
  }
}
```

## License

MIT

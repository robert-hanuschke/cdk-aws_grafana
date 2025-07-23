# @robhan-cdk-lib/aws_grafana

AWS Cloud Development Kit (CDK) constructs for Amazon Managed Grafana.

In [aws-cdk-lib.aws_grafana](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_grafana-readme.html), there currently only exist L1 constructs for Amazon Managed Grafana. 

While helpful, they miss convenience like:

- advanced parameter checking (min/max number values, string lengths, array lengths...) before CloudFormation deployment
- proper parameter typing, e.g. enum values instead of strings
- simply referencing other constructs instead of e.g. ARN strings

Those features are implemented here.

The CDK maintainers explain that [publishing your own package](https://github.com/aws/aws-cdk/blob/main/CONTRIBUTING.md#publishing-your-own-package) is "by far the strongest signal you can give to the CDK team that a feature should be included within the core aws-cdk packages".

This project aims to develop aws_grafana constructs to a maturity that can potentially be accepted to the CDK core.

It is not supported by AWS and is not endorsed by them. Please file issues in the [GitHub repository](https://github.com/robert-hanuschke/cdk-aws_grafana/issues) if you find any.

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

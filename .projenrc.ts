import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Robert Hanuschke',
  authorAddress: 'robhan-cdk-lib@hanuschke.eu',
  autoApproveOptions: {
    allowedUsernames: ['robert-hanuschke'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  cdkVersion: '2.198.0',
  defaultReleaseBranch: 'main',
  deps: ['@robhan-cdk-lib/utils'],
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  description: 'AWS CDK Construct Library for Amazon Managed Grafana',
  jsiiVersion: '~5.8.0',
  keywords: ['grafana'],
  license: 'MIT',
  name: 'aws_grafana',
  packageName: '@robhan-cdk-lib/aws_grafana',
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,
  projenrcTs: true,
  publishToGo: {
    moduleName: 'github.com/robert-hanuschke/robhan-cdk-lib-aws-grafana',
  },
  publishToMaven: {
    javaPackage: 'io.github.roberthanuschke.cdk.aws.grafana',
    mavenGroupId: 'io.github.robert-hanuschke',
    mavenArtifactId: 'cdk-aws-grafana',
    mavenServerId: 'central-ossrh',
  },
  publishToNuget: {
    dotNetNamespace: 'Robhan.CdkLib',
    packageId: 'Robhan.CdkLib.AwsGrafana',
  },
  publishToPypi: {
    distName: 'robhan_cdk_lib.aws_grafana',
    module: 'robhan_cdk_lib.aws_grafana',
  },
  repositoryUrl: 'https://github.com/robert-hanuschke/cdk-aws_grafana',
});

const releaseWorkflow = project.github?.tryFindWorkflow('release');

releaseWorkflow?.file!.addOverride(
  'jobs.release_npm.env.NPM_ACCESS_LEVEL',
  'public',
);

project.synth();

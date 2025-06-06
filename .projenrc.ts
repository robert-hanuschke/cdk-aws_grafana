import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Robert Hanuschke',
  authorAddress: 'robhan@amazon.de',
  autoApproveOptions: {
    allowedUsernames: ['robert-hanuschke'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  cdkVersion: '2.198.0',
  defaultReleaseBranch: 'main',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  description: 'AWS CDK Construct Library for Grafana',
  jsiiVersion: '~5.8.0',
  keywords: ['grafana'],
  license: 'MIT',
  name: 'aws_grafana',
  packageName: '@robhan-cdk-lib/aws_grafana',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/robert-hanuschke/cdk-aws_grafana',
});

const releaseWorkflow = project.github?.tryFindWorkflow('release');

releaseWorkflow?.file!.addOverride(
  'jobs.release_npm.env.NPM_ACCESS_LEVEL',
  'public',
);

project.synth();

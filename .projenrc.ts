import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Robert Hanuschke',
  authorAddress: 'robhan@amazon.de',
  cdkVersion: '2.198.0',
  defaultReleaseBranch: 'main',
  description: 'AWS CDK Construct Library for Grafana',
  jsiiVersion: '~5.8.0',
  keywords: ['grafana'],
  license: 'MIT',
  name: 'aws_grafana',
  packageName: '@robhan-cdk-lib/aws_grafana',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/robhan/aws_grafana.git',
});

const releaseWorkflow = project.github?.tryFindWorkflow('release');

releaseWorkflow?.file!.addOverride(
  'jobs.release_npm.env.NPM_ACCESS_LEVEL',
  'public',
);

project.synth();

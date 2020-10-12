const path = require('path');
const _ = require('lodash');
const glob = require('glob');

module.exports = {
  stories: ['../../**/*.stories.mdx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],
  webpackFinal: async (config, { configType }) => {
    const mainDirPath = path.resolve(__dirname, '../../../');
    const excludedNodeModulesFromPackages = [
      path.resolve(mainDirPath, 'node_modules'),
      ...glob.sync(path.resolve(mainDirPath, 'packages/*/node_modules'))
    ];

    config.module.rules = config.module.rules.map((rule) => {
      if (
        rule.include &&
        (_.isString(rule.include) || _.isArray(rule.include)) &&
        rule.include.includes(path.resolve(mainDirPath, 'packages/docs'))
      ) {
        rule.include = mainDirPath;
      }

      if (
        rule.exclude &&
        (_.isString(rule.exclude) || _.isArray(rule.exclude)) &&
        rule.exclude.includes(path.resolve(mainDirPath, 'packages/docs/node_modules'))
      ) {
        rule.exclude = excludedNodeModulesFromPackages;
      }

      return rule;
    });

    return config;
  },
};

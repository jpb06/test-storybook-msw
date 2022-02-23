const tsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const getStorybookMainConfig = (initializeConfigPath) => {
  /** @type {import("@storybook/core-common").StorybookConfig} */
  const storybookMainConfig = {
    stories: [
      '../../src/**/*.stories.mdx',
      '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react',
    staticDirs: ['../../public'],
    features: { emotionAlias: false },
    webpackFinal: async (config) => {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new tsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'next/config': require.resolve(initializeConfigPath),
      };

      return config;
    },
  };

  return storybookMainConfig;
};

module.exports = {
  getStorybookMainConfig,
};

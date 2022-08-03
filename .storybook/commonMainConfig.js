const tsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/** @type {import("@storybook/core-common").StorybookConfig} */
const getStorybookMainConfig = (initializeConfigPath) => {
  const storybookMainConfig = {
    core: { builder: 'webpack5' },
    stories: [
      '../../src/**/*.stories.mdx',
      '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      'storybook-addon-next-router',
      'storybook-dark-mode',
      'storybook-addon-swc',
    ],
    framework: '@storybook/react',
    staticDirs: ['../../public'],
    features: { emotionAlias: false },
    webpackFinal: async (config) => {
      config.resolve.fallback = {
        timers: false,
        tty: false,
        os: false,
        http: false,
        https: false,
        zlib: false,
        util: false,
        stream: false,
        ...config.resolve.fallback,
      };

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

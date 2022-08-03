const { basePath } = require('./config/basePath');
const initializeConfig = require('./config/initializeConfig');

const { serverRuntimeConfig, publicRuntimeConfig } = initializeConfig();

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  swcMinify: true,
  basePath,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Service-Worker-Allowed',
            value: '/',
          },
        ],
      },
    ];
  },
  serverRuntimeConfig,
  publicRuntimeConfig,
};

module.exports = nextConfig;

const initializeConfig = require('./config/initializeConfig')
const { basePath } = require('./config/basePath')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: `/${basePath}`,
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
    ]
  },
}

const { serverRuntimeConfig, publicRuntimeConfig } = initializeConfig()

module.exports = {
  ...nextConfig,
  serverRuntimeConfig,
  publicRuntimeConfig,
}

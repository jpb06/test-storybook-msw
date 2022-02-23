import getConfig from 'next/config';

export interface ServerRuntimeConfig {}

export interface ClientRuntimeConfig {
  basePath: string;
}

export interface RuntimeConfig {
  server: ServerRuntimeConfig;
  public: ClientRuntimeConfig;
}

export const getRuntimeConfig = (): RuntimeConfig => {
  const config = getConfig();

  return {
    public: config.publicRuntimeConfig,
    server: config.serverRuntimeConfig,
  };
};

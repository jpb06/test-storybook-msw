import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { WrapperResult } from './types/wrapper-result.type';

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
      mutations: {
        retry: false,
      },
    },
    /*eslint-disable*/
    logger: {
      log: console.log,
      warn: console.warn,
      error: jest.fn(),
    },
    /*eslint-enable*/
  });
};

export const ReactQueryProvider = (): WrapperResult => {
  const wrapper = ({ children }: PropsWithChildren<unknown>) => {
    // Create client in render to prevent cache sharing accross the tests
    const queryClient = createTestQueryClient();

    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  return { wrapper };
};

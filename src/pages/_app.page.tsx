import { EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { FullpageBox } from '@molecules';
import { WithSnackbar } from '@organisms';
import {
  EmotionCacheProvider,
  ReactQueryProvider,
  AppThemeProvider,
} from '@providers';

export interface EmotionAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const MyApp = ({ Component, emotionCache, pageProps }: EmotionAppProps) => (
  <EmotionCacheProvider emotionCache={emotionCache}>
    <Head>
      <title>Storybook / msw</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <AppThemeProvider>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <WithSnackbar>
        <ReactQueryProvider>
          <FullpageBox>
            <Component {...pageProps} />
          </FullpageBox>
        </ReactQueryProvider>
      </WithSnackbar>
    </AppThemeProvider>
  </EmotionCacheProvider>
);

export default MyApp;

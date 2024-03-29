import { CssBaseline } from '@mui/material';
import { mswDecorator } from 'msw-storybook-addon';
import React from 'react';

import { AppThemeProvider } from '../src/molecules/providers';

import { appTheme } from './../src/theme';

export const commonDecorators = [
  (Story, context) => (
    <>
      <meta name="theme-color" content={appTheme.palette.primary.main} />
      <AppThemeProvider>
        <CssBaseline />
        <Story />
      </AppThemeProvider>
    </>
  ),
  mswDecorator,
];

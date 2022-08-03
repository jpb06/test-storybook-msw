import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const commonParameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { sort: 'requiredFirst' },
  backgrounds: {
    default: 'dark',
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  msw: {
    handlers: {},
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

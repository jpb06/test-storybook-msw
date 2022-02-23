import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
};

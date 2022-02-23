import { initialize } from 'msw-storybook-addon';
import { basePath } from '../../config/basePath';
import { commonDecorators } from '../commonDecorators';
import { commonParameters } from '../commonParameters';

// Initialize MSW
initialize({
  serviceWorker: {
    url: `${basePath}/mockServiceWorker.js`,
    options: {
      scope: '/',
    },
  },
});

// Provide the MSW addon decorator globally
export const decorators = commonDecorators;
export const parameters = commonParameters;

import { initialize } from 'msw-storybook-addon';
import { commonDecorators } from '../commonDecorators';
import { commonParameters } from '../commonParameters';

// Initialize MSW
initialize({ onUnhandledRequest: 'bypass' });

// Provide the MSW addon decorator globally
export const decorators = commonDecorators;
export const parameters = commonParameters;

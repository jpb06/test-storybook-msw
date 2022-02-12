import { initialize, mswDecorator } from 'msw-storybook-addon'
import { basePath } from './../../config/basePath'
import { commonParameters } from './../commonParameters'

// Initialize MSW
initialize({
  serviceWorker: {
    url: `/${basePath}/mockServiceWorker.js`,
    options: {
      scope: '/',
    },
  },
})

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator]
export const parameters = commonParameters

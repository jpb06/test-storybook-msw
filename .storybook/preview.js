import { initialize, mswDecorator } from 'msw-storybook-addon'
import { basePath } from './../config/basePath'

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

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

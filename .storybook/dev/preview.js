import { initialize, mswDecorator } from 'msw-storybook-addon'
import { commonParameters } from './../commonParameters'

// Initialize MSW
initialize()

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator]
export const parameters = commonParameters

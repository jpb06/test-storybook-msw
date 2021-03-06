const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

/**
 * @type {import('@jest/types').Config.ProjectConfig}
 **/
// Add any custom config to be passed to Jest
const customJestConfig = {
  rootDir: '.',
  globalSetup: '<rootDir>/jest/jest.setup.env.ts',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@api$': '<rootDir>/src/api',
    '^@api/msw-handlers$': '<rootDir>/src/api/msw.handlers.ts',
    '^@api/types/(.*)$': '<rootDir>/src/api/main-backend/generated/$1',
    '^@molecules$': '<rootDir>/src/molecules',
    '^@organisms$': '<rootDir>/src/organisms',
    '^@templates$': '<rootDir>/src/templates',
    '^@providers$': '<rootDir>/src/molecules/providers',
    '^@logic/(.*)$': '<rootDir>/src/logic/$1',
    '^@theme$': '<rootDir>/src/theme',
    '^@tests/(.*)$': '<rootDir>/src/tests/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./src/api/generic/**',
    '!./src/api/msw.handlers.ts',
    '!./src/api/**/*.msw-handler.ts',
    '!./src/api/main-backend/**',
    '!./src/api/random-data/**',
    '!./src/molecules/providers/**',
    '!./src/tests/**',
    '!./src/**/mock-data/**',
    '!./src/pages/**',
    '!**/*.d.ts',
    '!**/index.ts',
    '!**/*.type.ts',
    '!**/*.stories.tsx',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

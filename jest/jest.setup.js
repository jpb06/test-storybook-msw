import '@testing-library/jest-dom/extend-expect';
import initializeConfig from './../config/initializeConfig';
import { server } from '../src/tests/msw/server';

jest.mock('next/config', () => () => initializeConfig());

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

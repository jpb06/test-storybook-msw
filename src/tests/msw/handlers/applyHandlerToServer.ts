import { DefaultBodyType, MockedRequest, RestHandler } from 'msw';

export const applyHandlerToServer = (
  handler: RestHandler<MockedRequest<DefaultBodyType>>,
  useServer: boolean
) => {
  if (useServer) {
    const { server } = require('./../server');
    return server.use(handler);
  }

  return handler;
};

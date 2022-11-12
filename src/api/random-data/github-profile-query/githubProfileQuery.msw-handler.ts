import { DefaultBodyType } from 'msw';

import { genericGetHandler } from '@tests/msw/handlers/generic-get.handler';

import { path } from './path';

export const githubProfileQueryHandler = (
  result: DefaultBodyType,
  status = 200,
  applyToServer = true
) =>
  genericGetHandler({
    backend: 'random-data',
    url: path,
    status,
    result,
    applyToServer,
  });

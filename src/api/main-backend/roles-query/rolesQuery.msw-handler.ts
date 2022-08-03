import { DefaultRequestBody } from 'msw';

import { genericGetHandler } from '@tests/msw/handlers/generic-get.handler';

import { path } from '../specs/RolesController/getAllRoles';

export const rolesQueryHandler = (
  result: DefaultRequestBody,
  status = 200,
  applyToServer = true
) =>
  genericGetHandler({
    backend: 'main-backend',
    url: path,
    status,
    result,
    applyToServer,
  });

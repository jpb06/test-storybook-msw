import { DefaultBodyType } from 'msw';

import { genericGetHandler } from '@tests/msw/handlers/generic-get.handler';

import { path } from '../specs/SkillsController/getAllSkills';

export const skillsQueryHandler = (
  result: DefaultBodyType,
  status = 200,
  applyToServer = true
) =>
  genericGetHandler({
    backend: 'main-backend',
    url: path,
    status,
    result: { result },
    applyToServer,
  });

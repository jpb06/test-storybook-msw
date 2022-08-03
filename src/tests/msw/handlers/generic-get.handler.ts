import { DefaultRequestBody, rest } from 'msw';

import { Backend, getUrl } from '@api';

import { applyHandlerToServer } from './applyHandlerToServer';

type GenericGetHandlerParams = {
  backend: Backend;
  url: string;
  status: number;
  result: DefaultRequestBody;
  applyToServer?: boolean;
};

export const genericGetHandler = ({
  backend,
  url,
  status,
  result,
  applyToServer = true,
}: GenericGetHandlerParams) => {
  const backendUrl = getUrl(backend, url);
  const handler = rest.get(backendUrl, (_, res, ctx) =>
    res(ctx.status(status), ctx.json(result))
  );

  return applyHandlerToServer(handler, applyToServer);
};

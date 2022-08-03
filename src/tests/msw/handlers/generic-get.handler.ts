import { DefaultRequestBody, rest } from 'msw';

import { getMainBackendUrl } from '@api';

import { applyHandlerToServer } from './applyHandlerToServer';

type GenericGetHandlerParams = {
  url: string;
  status: number;
  result: DefaultRequestBody;
  applyToServer?: boolean;
};

export const genericGetHandler = ({
  url,
  status,
  result,
  applyToServer = true,
}: GenericGetHandlerParams) => {
  const backendUrl = getMainBackendUrl(url);
  const handler = rest.get(backendUrl, (_, res, ctx) =>
    res(ctx.status(status), ctx.json(result))
  );

  return applyHandlerToServer(handler, applyToServer);
};

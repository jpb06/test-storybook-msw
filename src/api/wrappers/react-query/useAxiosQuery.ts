import { useQuery } from '@tanstack/react-query';
import { Method } from 'axios';

import { getMainBackendUrl } from 'src/api/main-backend/get-main-backend-url';

import { axiosRequest } from '../axios/axios-request';
import { QueryResult } from '../axios/types/query-result.type';
import { UnWrapResult } from '../axios/types/unwrap-result.type';

export const useAxiosQuery = <TSuccess, TError>(
  key: Array<unknown>,
  url: string,
  method: Method,
  data = undefined,
  options = {}
): QueryResult<TSuccess, TError> => {
  const mainbackendUrl = getMainBackendUrl(url);

  return useQuery<
    UnWrapResult<TSuccess> | undefined,
    TError,
    UnWrapResult<TSuccess>
  >(
    key,
    () => axiosRequest<TSuccess>({ method, url: mainbackendUrl, data }),
    options
  );
};

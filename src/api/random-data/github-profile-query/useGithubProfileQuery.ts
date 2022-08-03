import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { delay } from '@logic/delay';

import { path } from './path';

type GithubProfile = {
  info: {
    nickname: string;
    email: string;
    name: string;
  };
  extra: {
    raw_info: {
      followers: number;
      following: number;
      public_repos: number;
      public_gists: number;
      location: string;
    };
  };
};

export type GithubProfileQueryResult = {
  nickname: string;
  email: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  location: string;
};

export const useGithubProfileQuery = () =>
  useQuery<GithubProfileQueryResult>(['github-profile'], async () => {
    const [response] = await Promise.all([
      axios.get<GithubProfile>(path),
      delay(2500), // ensuring every operation takes at least half a sec
    ]);

    return { ...response.data.extra.raw_info, ...response.data.info };
  });

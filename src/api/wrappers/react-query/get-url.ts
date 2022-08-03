import { Backend } from '@api';

export const getUrl = (backend: Backend, path: string) => {
  switch (backend) {
    case 'main-backend':
      return `${process.env.NEXT_PUBLIC_API_URL ?? ''}${path}`;
    case 'random-data':
      return path;
  }
};

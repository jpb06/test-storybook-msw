import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export const Storybook = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      void router.push('/storybook/index.html');
    } else if (process.env.NODE_ENV === 'development') {
      void router.push('http://localhost:6006/');
    }
  }, [router]);

  return <CircularProgress />;
};

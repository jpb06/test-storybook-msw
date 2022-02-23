import { render as rtlRender, RenderResult } from '@testing-library/react';
import React from 'react';

import { WithSnackbar } from '@organisms';
import { EmotionCacheProvider } from '@providers';

import { ReactQueryWrapper } from '../wrappers/react-query';

export const render = (component: JSX.Element): RenderResult => {
  const wrapper: React.FC = ({ children }) => {
    return (
      <EmotionCacheProvider>
        <WithSnackbar>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </WithSnackbar>
      </EmotionCacheProvider>
    );
  };

  return rtlRender(component, { wrapper });
};

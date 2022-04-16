import React, { PropsWithChildren } from 'react';

import { EmotionCacheProvider as EmotionCache } from '../../../molecules/providers';
import { WrapperResult } from './types/wrapper-result.type';

export const EmotionCacheProvider = (): WrapperResult => {
  const wrapper = ({ children }: PropsWithChildren<unknown>) => (
    <EmotionCache>{children}</EmotionCache>
  );

  return { wrapper };
};

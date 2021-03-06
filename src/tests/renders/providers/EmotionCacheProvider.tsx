import React, { PropsWithChildren } from 'react';

import { EmotionCacheProvider as EmotionCache } from '../../../molecules/providers';
import { TestWrapper } from './types/test-wrapper.type';

export const EmotionCacheProvider =
  (): TestWrapper =>
  ({ children }: PropsWithChildren<unknown>) =>
    <EmotionCache>{children}</EmotionCache>;

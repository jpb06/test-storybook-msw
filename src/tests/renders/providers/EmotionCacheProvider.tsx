import React, { PropsWithChildren } from 'react';

import { TestWrapper } from './types/test-wrapper.type';
import { EmotionCacheProvider as EmotionCache } from '../../../molecules/providers';

export const EmotionCacheProvider =
  (): TestWrapper =>
  ({ children }: PropsWithChildren<unknown>) =>
    <EmotionCache>{children}</EmotionCache>;

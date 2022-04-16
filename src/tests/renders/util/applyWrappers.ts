import {
  EmotionCacheProvider,
  SnackbarProvider,
  ReactQueryProvider,
  ThemeProvider,
} from './../providers';
import { wrappersToWrapper } from './wrappersToWrapper';

export type RenderProviders = 'reactQuery' | 'snackbar';

export interface ApplyWrappersProps {
  providers?: Array<RenderProviders>;
}

export const applyWrappers = (props?: ApplyWrappersProps) => {
  const defaultProviders = ['emotionCache', 'theme'];
  const providers = props?.providers || [];
  const wrappers = [...defaultProviders, ...providers].map((key) => {
    switch (key) {
      case 'theme': {
        const { wrapper: themeWrapper } = ThemeProvider();
        return themeWrapper;
      }
      case 'snackbar': {
        const { wrapper: snackbarWrapper } = SnackbarProvider();
        return snackbarWrapper;
      }
      case 'reactQuery': {
        const { wrapper: reactQueryWrapper } = ReactQueryProvider();
        return reactQueryWrapper;
      }
      case 'emotionCache': {
        const { wrapper: EmotionCacheWrapper } = EmotionCacheProvider();

        return EmotionCacheWrapper;
      }
      default:
        throw new Error(`${key} no handled in applyWrappers`);
    }
  });

  return wrappersToWrapper(wrappers);
};

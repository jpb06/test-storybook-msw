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
        return ThemeProvider();
      }
      case 'snackbar': {
        return SnackbarProvider();
      }
      case 'reactQuery': {
        return ReactQueryProvider();
      }
      case 'emotionCache': {
        return EmotionCacheProvider();
      }
      default:
        throw new Error(`${key} no handled in applyWrappers`);
    }
  });

  return wrappersToWrapper(wrappers);
};

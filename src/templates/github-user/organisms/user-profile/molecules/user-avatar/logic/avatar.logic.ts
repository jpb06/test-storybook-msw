import { SxProps, Theme } from '@mui/material';

import { appTheme } from '@theme';

const stringToColor = (string: string): string => {
  let hash = 0;
  let i: number;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

type StringAvatarResult = {
  sx: SxProps<Theme> | undefined;
  children: string;
};

export const stringAvatar = (name: string): StringAvatarResult => {
  const chunks = name.toUpperCase().split(' ');

  const backgroundColor = stringToColor(name);

  return {
    sx: {
      bgcolor: backgroundColor,
      color: appTheme.palette.getContrastText(backgroundColor),
      width: 55,
      height: 55,
      mb: 2,
      fontSize: 'x-large',
    },
    children: `${chunks[0][0]}${chunks[1][0]}`,
  };
};

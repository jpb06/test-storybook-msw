import { Box, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { alpha } from '@mui/material/styles';
import React, { PropsWithChildren } from 'react';

import { spinKeyframe } from '@logic/keyframes/spin.keyframe';
import { appTheme } from '@theme';

export type GlobalIndicatorProps = {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap>;
};

export const GlobalIndicator = ({
  title,
  Icon,
  children,
}: PropsWithChildren<GlobalIndicatorProps>) => (
  <Box
    component="div"
    sx={{
      textAlign: 'center',
      color: alpha(appTheme.colors.white, 0.8),
      marginTop: 6,
      marginBottom: 6,
    }}
  >
    <Icon
      sx={{
        height: 100,
        width: 100,
        animation: `${spinKeyframe} 2s linear`,
      }}
    />
    <Box
      component="div"
      sx={{
        fontSize: 'x-large',
        fontWeight: '600',
      }}
    >
      {title}
    </Box>
    <Box component="span" sx={{ color: 'white' }}>
      {children}
    </Box>
  </Box>
);

import { Alert, AlertColor, Box } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export type TopAlertProps = {
  severity: AlertColor;
  errorText: string;
};

export const TopAlert = ({
  severity,
  errorText,
  children,
}: PropsWithChildren<TopAlertProps>) => {
  return (
    <Box>
      <Alert variant="outlined" severity={severity} sx={{ margin: '4px 1px' }}>
        {errorText}
      </Alert>
      {children}
    </Box>
  );
};

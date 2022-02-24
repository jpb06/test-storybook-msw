import { Alert, AlertColor, Box } from '@mui/material';
import React from 'react';

export type TopAlertProps = {
  severity: AlertColor;
  errorText: string;
};

export const TopAlert: React.FC<TopAlertProps> = ({
  severity,
  errorText,
  children,
}) => {
  return (
    <Box>
      <Alert variant="outlined" severity={severity} sx={{ margin: '4px 1px' }}>
        {errorText}
      </Alert>
      {children}
    </Box>
  );
};

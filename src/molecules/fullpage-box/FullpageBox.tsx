import {
  alpha,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import React, { PropsWithChildren } from 'react';

import { getRuntimeConfig } from '@logic/getRuntimeConfig';
import { Brand } from '@molecules';

export const FullpageBox = ({ children }: PropsWithChildren<unknown>) => {
  const {
    public: { basePath },
  } = getRuntimeConfig();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundSize: 'cover',
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: '100%',
          paddingBottom: 2,
          backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.88),
          borderRadius: 4,
          maxWidth: 900,
        }}
      >
        <CardMedia
          sx={{
            height: 150,
          }}
          image={`${basePath}/img/banner.jpg`}
        />
        <CardContent>
          <Grid container justifyContent="center" direction="row">
            <Brand color="amber" centered big />
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            paddingTop: 0,
            justifyContent: 'center',
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {children}
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

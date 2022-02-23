import { Grid } from '@mui/material';
import React from 'react';

import { UserProfile } from './organisms/user-profile/UserProfile';
import { UserSkills } from './organisms/user-skills/UserSkills';

export const GithubUser = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <Grid item xs={12} md={6}>
        <UserProfile />
      </Grid>
      <Grid item xs={12} md={6}>
        <UserSkills />
      </Grid>
    </Grid>
  );
};

import { Avatar, Grid } from '@mui/material';

import { stringAvatar } from './logic/avatar.logic';

export type UserAvatarProps = {
  name: string;
};

export const UserAvatar: React.FC<UserAvatarProps> = ({ name }) => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Grid item>
      <Avatar {...stringAvatar(name)} />
    </Grid>
  </Grid>
);

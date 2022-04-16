import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { PropsWithChildren } from 'react';

import { appTheme } from '@theme';

export type ProfileInfoProps = {
  Icon: OverridableComponent<SvgIconTypeMap>;
  type: string;
  value: string | number;
};

export const ProfileInfo = ({
  Icon,
  type,
  value,
}: PropsWithChildren<ProfileInfoProps>) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: appTheme.colors.white }}>
          <Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={type} secondary={value} />
    </ListItem>
  );
};

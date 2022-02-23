import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { appTheme } from '@theme';

export type ProfileInfoProps = {
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
    muiName: string;
  };
  type: string;
  value: string | number;
};

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  Icon,
  type,
  value,
}) => {
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

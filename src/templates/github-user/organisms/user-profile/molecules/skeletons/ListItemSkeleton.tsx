import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
} from '@mui/material';

export const ListItemSkeleton = () => (
  <ListItem sx={{ mt: 1 }}>
    <ListItemAvatar>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
    </ListItemAvatar>
    <ListItemText
      primary={<Skeleton animation="wave" height={14} width="20%" />}
      secondary={<Skeleton animation="wave" height={14} width="60%" />}
    />
  </ListItem>
);

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, List, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import { getRuntimeConfig } from '@logic/getRuntimeConfig';
import { blurKeyframe } from '@logic/keyframes/blur.keyframe';

import { ListItemSkeleton } from './ListItemSkeleton';

export const CardSkeleton = () => {
  const {
    public: { basePath },
  } = getRuntimeConfig();

  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={55}
            height={55}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Skeleton
            animation="wave"
            height={16}
            width="80%"
            style={{ marginTop: 14, marginBottom: 6 }}
          />
        }
        subheader={
          <Skeleton
            animation="wave"
            height={14}
            width="40%"
            style={{ marginBottom: 22 }}
          />
        }
      />
      <CardMedia
        component="img"
        height="160"
        image={`${basePath}/img/github-logo.jpeg`}
        sx={{ animation: `${blurKeyframe} 4s linear infinite` }}
      />
      <CardContent sx={{ mb: 1 }}>
        <List dense>
          <ListItemSkeleton />
          <ListItemSkeleton />
          <ListItemSkeleton />
        </List>
      </CardContent>
    </Card>
  );
};

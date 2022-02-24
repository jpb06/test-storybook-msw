import CampaignIcon from '@mui/icons-material/Campaign';
import CommitIcon from '@mui/icons-material/Commit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardContent, List } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

import { GithubProfileQueryResult, useGithubProfileQuery } from '@api';
import { getRuntimeConfig } from '@logic/getRuntimeConfig';
import { TopAlert } from '@molecules';

import { ProfileInfo } from './molecules/profile-info/ProfileInfo';
import { CardSkeleton } from './molecules/skeletons/CardSkeleton';
import { UserAvatar } from './molecules/user-avatar/UserAvatar';

export const UserProfile = () => {
  const { isLoading, isError, data } = useGithubProfileQuery();
  const {
    public: { basePath },
  } = getRuntimeConfig();

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (isError) {
    return (
      <TopAlert
        severity="error"
        errorText="We've been unable to load your profile"
      >
        <CardSkeleton />
      </TopAlert>
    );
  }

  const { followers, location, public_repos, name, email } =
    data as GithubProfileQueryResult;

  return (
    <Card>
      <CardHeader
        avatar={<UserAvatar name={name} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={email}
      />
      <CardMedia
        component="img"
        height="160"
        image={`${basePath}/img/github-logo.jpeg`}
        alt={name}
      />
      <CardContent>
        <List dense>
          <ProfileInfo Icon={LocationOnIcon} type="Location" value={location} />
          <ProfileInfo
            Icon={CommitIcon}
            type="Public repos"
            value={public_repos}
          />
          <ProfileInfo Icon={CampaignIcon} type="Followers" value={followers} />
        </List>
      </CardContent>
    </Card>
  );
};

import AnnouncementIcon from '@mui/icons-material/Announcement';
import BugReportIcon from '@mui/icons-material/BugReport';
import ErrorIcon from '@mui/icons-material/Error';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Story, ComponentMeta } from '@storybook/react';

import { ProfileInfo, ProfileInfoProps } from './ProfileInfo';

const icons = { TagFacesIcon, ErrorIcon, AnnouncementIcon, BugReportIcon };

export default {
  component: ProfileInfo,
  title: 'User Stories/Github user/molecules/ProfileInfo',
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          TagFacesIcon: 'Face icon',
          ErrorIcon: 'Error icon',
          AnnouncementIcon: 'Accouncement icon',
          BugReportIcon: 'Bug icon',
        },
      },
    },
  },
} as ComponentMeta<typeof ProfileInfo>;

const Template: Story<ProfileInfoProps> = (args) => <ProfileInfo {...args} />;

export const NominalCase = Template.bind({});
NominalCase.args = {
  Icon: TagFacesIcon,
  type: 'Cool!',
  value: 'Story bro',
};
NominalCase.parameters = {};

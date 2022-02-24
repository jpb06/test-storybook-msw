import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Story, ComponentMeta } from '@storybook/react';

import { TopAlert, TopAlertProps } from './TopAlert';

export default {
  component: TopAlert,
  title: 'molecules/TopAlert',
} as ComponentMeta<typeof TopAlert>;

const Template: Story<TopAlertProps> = (args) => (
  <TopAlert {...args}>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  </TopAlert>
);

export const Primary = Template.bind({});
Primary.args = {
  severity: 'error',
  errorText: 'Error message',
};

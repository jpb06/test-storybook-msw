import BugReportIcon from '@mui/icons-material/BugReport';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import {
  AlertColor,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story, ComponentMeta } from '@storybook/react';
import { useContext } from 'react';

import { SnackbarContext, WithSnackbar } from './Snackbar.context';
import { appTheme } from '../../theme';

export default {
  component: WithSnackbar,
  title: 'organisms/Snackbar',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone5',
    },
  },
} as ComponentMeta<never>;

const ActionsList = () => {
  const showSnackbar = useContext(SnackbarContext);

  const handleClick = (message: string, severity: AlertColor) => {
    showSnackbar(message, severity);
  };

  return (
    <List>
      {[
        { severity: 'error', Icon: BugReportIcon },
        { severity: 'info', Icon: InfoIcon },
        { severity: 'success', Icon: CheckCircleIcon },
        { severity: 'warning', Icon: WarningIcon },
      ].map(({ severity, Icon }) => (
        <ListItem disablePadding key={severity}>
          <ListItemButton
            onClick={() =>
              handleClick(`${severity} message`, severity as AlertColor)
            }
          >
            <ListItemIcon>
              <Icon sx={{ color: appTheme.colors.amber }} />
            </ListItemIcon>
            <ListItemText
              primary={`${severity} snackbar`}
              sx={{ color: appTheme.colors.darkCyan }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const Template: Story = (_) => (
  <WithSnackbar>
    <ActionsList />
  </WithSnackbar>
);

export const Primary = Template.bind({});
Primary.args = {};

import { Story, ComponentMeta } from '@storybook/react';

import { githubProfileQueryHandler } from '@api/msw-handlers';
import { ReactQueryWrapper } from '@tests/wrappers/react-query';

import { UserProfile } from './UserProfile';
import { apiErrorMockData } from './mock-data/api-error.mock-data';
import { githubProfileQueryMockData } from './mock-data/githubProfileQuery.mock-data';

export default {
  component: UserProfile,
  title: 'User Stories/Github user/organisms/UserProfile',
  argTypes: {},
} as ComponentMeta<typeof UserProfile>;

const Template: Story = (_) => (
  <ReactQueryWrapper>
    <UserProfile />
  </ReactQueryWrapper>
);

export const NominalCase = Template.bind({});
NominalCase.args = {};
NominalCase.parameters = {
  msw: {
    handlers: [
      githubProfileQueryHandler(githubProfileQueryMockData, 200, false),
    ],
  },
};

export const ErrorCase = Template.bind({});
ErrorCase.args = {};
ErrorCase.parameters = {
  msw: {
    handlers: [githubProfileQueryHandler(apiErrorMockData, 500, false)],
  },
};

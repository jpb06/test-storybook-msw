import { Story, ComponentMeta } from '@storybook/react';

import { skillsQueryHandler } from '@api/msw-handlers';
import { ReactQueryWrapper } from '@tests/wrappers/react-query';

import { UserSkills } from './UserSkills';
import { skillsQueryMockData } from './mock-data/skillsQuery.mock-data';

export default {
  component: UserSkills,
  title: 'User Stories/Github user/organisms/UserSkills',
  argTypes: {},
} as ComponentMeta<typeof UserSkills>;

const Template: Story = (_) => (
  <ReactQueryWrapper>
    <UserSkills />
  </ReactQueryWrapper>
);

export const NominalCase = Template.bind({});
NominalCase.args = {};
NominalCase.parameters = {
  msw: {
    handlers: [skillsQueryHandler({ result: skillsQueryMockData }, 200, false)],
  },
};

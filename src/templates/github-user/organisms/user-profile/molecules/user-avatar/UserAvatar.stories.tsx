import { Story, ComponentMeta } from '@storybook/react';

import { UserAvatar, UserAvatarProps } from './UserAvatar';

export default {
  component: UserAvatar,
  title: 'User Stories/Github user/molecules/UserAvatar',
  argTypes: {},
} as ComponentMeta<typeof UserAvatar>;

const Template: Story<UserAvatarProps> = (args) => <UserAvatar {...args} />;

export const NominalCase = Template.bind({});
NominalCase.args = {
  name: 'Thomas Chafouin',
};
NominalCase.parameters = {};

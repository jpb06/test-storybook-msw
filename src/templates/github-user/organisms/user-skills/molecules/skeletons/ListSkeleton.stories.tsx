import { Story, ComponentMeta } from '@storybook/react';

import { ListSkeleton } from './ListSkeleton';

export default {
  component: ListSkeleton,
  title: 'User Stories/Github user/molecules/ListSkeleton',
  argTypes: {},
} as ComponentMeta<typeof ListSkeleton>;

const Template: Story = (args) => <ListSkeleton {...args} />;

export const NominalCase = Template.bind({});
NominalCase.args = {};
NominalCase.parameters = {};

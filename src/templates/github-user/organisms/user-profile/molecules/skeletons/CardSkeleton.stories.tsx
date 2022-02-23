import { Story, ComponentMeta } from '@storybook/react';

import { CardSkeleton } from './CardSkeleton';

export default {
  component: CardSkeleton,
  title: 'User Stories/Github user/molecules/CardSkeleton',
  argTypes: {},
} as ComponentMeta<typeof CardSkeleton>;

const Template: Story = (args) => <CardSkeleton {...args} />;

export const NominalCase = Template.bind({});
NominalCase.args = {};
NominalCase.parameters = {};

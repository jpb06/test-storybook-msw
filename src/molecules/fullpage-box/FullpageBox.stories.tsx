import { Story, ComponentMeta } from '@storybook/react';

import { FullpageBox } from './FullpageBox';

export default {
  component: FullpageBox,
  title: 'molecules/layout/FullpageBox',
} as ComponentMeta<typeof FullpageBox>;

const Template: Story = (_) => <FullpageBox>Hello!</FullpageBox>;

export const Primary = Template.bind({});
Primary.args = {};

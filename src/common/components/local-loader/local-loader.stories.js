import React from 'react';
import LocalLoader from './local-loader.component';

export default {
  title: 'VAA/Local Loader',
  component: LocalLoader,
  argTypes: {
    loader: { control: 'boolean' },
  },
};

const Template = (args) => <LocalLoader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  loader: true,
};

/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ToggleField from './ToggleField';

const input = {
  value: true,
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

it('renders correctly', () => {
  const wrapper = mount(
    <ToggleField
      input={input}
      label="my label"
    />
  );

  expect(wrapper).toMatchSnapshot();
});

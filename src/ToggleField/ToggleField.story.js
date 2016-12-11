import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ToggleField from './ToggleField';

const input = {
  value: true,
  onChange: (value) => console.log('🍇', value), // eslint-disable-line no-console
};

storiesOf('ToggleField', module)
  .add('default', () => (
    <ToggleField
      input={input}
      label="my label"
    />
  ));

/* eslint-env mocha */

import React from 'react';
import { shallow } from 'enzyme';
import ToggleField from './ToggleField';
import { assert } from 'chai';

describe('ToggleField', () => {
  it('should render a <ToggleField> element', () => {
    const wrapper = shallow(
      <ToggleField />
    );
    assert.strictEqual(wrapper.type(), 'div', 'should be a <div>');
  });
});

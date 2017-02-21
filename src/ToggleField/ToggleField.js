import React, { PropTypes } from 'react';
import Toggle from '@ox2/toggle/Toggle';

/**
 * ToggleField Component
 */
const ToggleField = ({ input, ...custom }) => (
  <Toggle
    value={input.value ? true : false} // eslint-disable-line no-unneeded-ternary
    onChange={input.onChange} // eslint-disable-line react/jsx-handler-names
    {...custom}
  />
);

ToggleField.propTypes = {
  /**
   * [redux-form] The props under the input key are what connects your input component to Redux and are meant to be destructured into your `<input/>` component.
   */
  input: PropTypes.object,
};

export default ToggleField;

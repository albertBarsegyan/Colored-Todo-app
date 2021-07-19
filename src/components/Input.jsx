/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { onChange, customColor, placeholder, ...attr } = this.props;
    return (
      <div>
        <input
          {...attr}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full text-xl border border-${customColor}-500 px-4 py-2 text-${customColor}-500 bg-transparent placeholder-${customColor}-500`}
        />
      </div>
    );
  }
}
Input.propTypes = {
  onChange: PropTypes.func,
  customColor: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
Input.defaultProps = {
  onChange: null,
};

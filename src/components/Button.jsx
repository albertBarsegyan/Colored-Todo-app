import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { children, customColor, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={onClick}
        className={`border border-${customColor}-500 text-${customColor}-500 px-4 py-2 text-xl hover:bg-${customColor}-500 hover:text-white duration-100`}
      >
        {children}
      </button>
    );
  }
}
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  customColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {
    console.log('button def');
  },
};

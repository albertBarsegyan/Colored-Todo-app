import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Button extends Component {
  render() {
    const { children, customColor, onClick, isClicked } = this.props;
    const buttonActive = classNames({
      'border px-4 py-2 text-xl duration-100': true,
      [`hover:bg-${customColor}-500 hover:text-white`]: true,
      [`border-${customColor}-500`]: !isClicked,
      [`text-${customColor}-500`]: !isClicked,
      [`bg-${customColor}-500`]: isClicked,
      'text-white': isClicked,
    });
    return (
      <button type="button" onClick={onClick} className={buttonActive}>
        {children}
      </button>
    );
  }
}
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  customColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isClicked: PropTypes.bool,
};
Button.defaultProps = {
  onClick: () => {
    console.log('button def');
  },
  isClicked: false,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
  render() {
    const { onchange } = this.props;

    return (
      <div>
        <input
          type="text"
          onChange={onchange}
          className="border border-blue-600 text-xl px-4 py-2"
        />
      </div>
    );
  }
}
TodoInput.propTypes = {
  onchange: PropTypes.func.isRequired,
};

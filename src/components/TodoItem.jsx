/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TodoItemButtons from './TodoItemButtons';

export default class TodoItem extends Component {
  render() {
    const { value, isDone } = this.props;
    const isActive = classNames({
      'block w-80 text-xl border px-4 py-2 bg-transparent break-all duration-150': true,
      'border-blue-500': !isDone,
      'text-blue-500': !isDone,
      'placeholder-blue-500': !isDone,
      'border-green-500': isDone,
      'text-green-500': isDone,
      'placeholder-green-500': isDone,
    });
    return (
      <li className="my-4">
        <div className="flex items-center justify-center">
          <div className="mx-4">
            <span className={isActive}>{value}</span>
          </div>
          <TodoItemButtons />
        </div>
      </li>
    );
  }
}
TodoItem.propTypes = {
  value: PropTypes.string.isRequired,
};

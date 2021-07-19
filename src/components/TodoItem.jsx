import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TodoItemButtons from './TodoItemButtons';

export default class TodoItem extends Component {
  render() {
    const { value } = this.props;
    return (
      <li className="my-4">
        <div className="flex items-center justify-center">
          <Input
            placeholder="test"
            customColor="blue"
            value={value}
            onChange={(e) => {
              console.log('input on change event ->>', e.target.value);
            }}
          />
          <TodoItemButtons />
        </div>
      </li>
    );
  }
}
TodoItem.propTypes = {
  value: PropTypes.string.isRequired,
};

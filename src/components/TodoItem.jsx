import React, { Component } from 'react';
import Input from './Input';
import TodoItemButtons from './TodoItemButtons';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
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

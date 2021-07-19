import React, { Component } from 'react';

import handleTodoAdd from '../helpers/handleTodoAdd';
import FilterContainer from './FilterContainer';
import Input from './Input';
import TodoItem from './TodoItem';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.handleTodoAdd = handleTodoAdd.bind(this);
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="relative">
        <div className="flex flex-col items-center justify-center absolute top-40 left-1/2 transform -translate-x-1/2">
          <div className="w-full">
            <Input
              onKeyPress={(e) => {
                this.handleTodoAdd(e, 'todoList');
              }}
              customColor="indigo"
              placeholder="Add todo and press Enter."
            />
          </div>

          <FilterContainer />
          <div className="mt-5">
            <ul>
              {todoList.map((todoObject) => {
                const { inputValue, id } = todoObject;
                return <TodoItem value={inputValue} key={id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

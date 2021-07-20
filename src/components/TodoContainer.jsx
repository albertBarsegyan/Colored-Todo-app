import React, { Component } from 'react';
import filterData from '../helpers/filterData';
import handleActive from '../helpers/handleActive';
import handleAll from '../helpers/handleAll';
import handleComplete from '../helpers/handleComplete';
import handleCompleted from '../helpers/handleCompleted';

import handleDelete from '../helpers/handleDelete';
import handleSavedData from '../helpers/handleSavedData';

import handleTodoAdd from '../helpers/handleTodoAdd';
import FilterContainer from './FilterContainer';
import Input from './Input';
import TodoItem from './TodoItem';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      filterType: 'all',
    };
    this.handleTodoAdd = handleTodoAdd.bind(this);
    this.handleDelete = handleDelete.bind(this);
    this.handleComplete = handleComplete.bind(this);
    this.handleSavedData = handleSavedData.bind(this);

    // filter by type
    this.filterData = filterData.bind(this);
    this.handleAll = handleAll.bind(this);
    this.handleCompleted = handleCompleted.bind(this);
    this.handleActive = handleActive.bind(this);
  }

  render() {
    return (
      <div className="relative">
        <div className="w-1/2 flex flex-col items-center justify-center absolute top-40 left-1/2 transform -translate-x-1/2">
          <div className="w-full">
            <Input
              onKeyPress={(e) => {
                this.handleTodoAdd(e, 'todoList');
              }}
              customColor="indigo"
              placeholder="Add todo and press Enter."
            />
          </div>

          <FilterContainer
            handleAll={() => {
              this.handleAll('filterType');
            }}
            handleCompleted={() => {
              this.handleCompleted('filterType');
            }}
            handleActive={() => {
              this.handleActive('filterType');
            }}
          />
          <div className="mt-5">
            <ul>
              {this.filterData('filterType', 'todoList').map((todoObject) => {
                const { inputValue, id, isActive } = todoObject;
                return (
                  <TodoItem
                    savedValue={(savedInputData) =>
                      this.handleSavedData(id, 'todoList', savedInputData)
                    }
                    handleDelete={() => {
                      this.handleDelete(id, 'todoList');
                    }}
                    handleComplete={() => {
                      this.handleComplete(id, 'todoList');
                    }}
                    value={inputValue}
                    key={id}
                    isDone={isActive}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TodoItemButtons from './TodoItemButtons';
import handleEditor from '../helpers/handleEditor';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      editButtonName: 'Edit',
    };
  }

  render() {
    const { value, isDone, handleDelete, handleComplete } = this.props;
    const { editButtonName } = this.state;
    const { isEditable } = this.state;
    const isActive = classNames({
      'block w-80  border px-4 py-2 bg-transparent break-all duration-150': true,
      'border-blue-500': !isDone,
      'text-blue-500': !isDone,
      'placeholder-blue-500': !isDone,
      'border-green-500': isDone,
      'text-green-500': isDone,
      'placeholder-green-500': isDone,
      'text-xl': !isEditable,
      'text-4xl': isEditable,
    });
    this.handleEditor = handleEditor.bind(this);
    return (
      <li className="my-4">
        <div className="flex items-center justify-center">
          <div className="mx-4" ref={this.makeEditable}>
            {isEditable ? (
              <input
                type="text"
                className={isActive}
                placeholder="Add todo."
                value={value}
                // onBlur={(e) => {
                 
                //   this.setState((prevState) => ({ isEditable: !prevState.isEditable }));
                //   this.props.savedValue(e.target.value);
                //   console.log(this.state.isEditable, 'inside onBlur');
                // }}
                onChange={(e) => this.props.savedValue(e.target.value)}
              />
            ) : (
              <span className={isActive}>{value}</span>
            )}
          </div>
          <TodoItemButtons
            handleEdit={(e) => {
              this.handleEditor(e, 'isEditable');
            }}
            editButtonName={editButtonName}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        </div>
      </li>
    );
  }
}
TodoItem.propTypes = {
  value: PropTypes.string.isRequired,
};

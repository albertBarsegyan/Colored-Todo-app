import React, { Component } from 'react';
import Button from './Button';

export default class TodoItemButtons extends Component {
  render() {
    const { handleEdit, handleComplete, handleDelete } = this.props;
    return (
      <div>
        <Button customColor="blue" onClick={handleEdit}>
          Edit
        </Button>
        <Button customColor="green" onClick={handleComplete}>
          Complete
        </Button>
        <Button customColor="red" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    );
  }
}

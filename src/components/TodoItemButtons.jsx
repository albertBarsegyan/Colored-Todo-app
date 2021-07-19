import React, { Component } from 'react';
import Button from './Button';

export default class TodoItemButtons extends Component {
  render() {
    return (
      <div>
        <Button
          customColor="blue"
          onClick={() => {
            console.log('edit button click->');
          }}
        >
          Edit
        </Button>
        <Button
          customColor="green"
          onClick={() => {
            console.log('complete button click->');
          }}
        >
          Complete
        </Button>
        <Button
          customColor="red"
          onClick={() => {
            console.log('delete button click->');
          }}
        >
          Delete
        </Button>
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class TodoItemButtons extends Component {
  render() {
    const { handleEdit, handleComplete, handleDelete, editButtonName } = this.props;
    return (
      <div>
        <Button customColor="blue" onClick={handleEdit}>
          {editButtonName}
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
TodoItemButtons.propTypes = {
  editButtonName: PropTypes.string,
};
TodoItemButtons.defaultProps = {
  editButtonName: 'Edit',
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class FilterContainer extends Component {
  render() {
    const {
      handleAll,
      handleCompleted,
      handleActive,
      isClickedActive,
      isClickedCompleted,
      isClickedAll,
    } = this.props;

    return (
      <div className="flex flex-row items-center justify-center mt-5">
        <div>
          <Button customColor="gray" isClicked={isClickedAll} onClick={handleAll}>
            All
          </Button>
        </div>
        <div>
          <Button customColor="yellow" isClicked={isClickedCompleted} onClick={handleCompleted}>
            Completed
          </Button>
        </div>
        <div>
          <Button customColor="pink" onClick={handleActive} isClicked={isClickedActive}>
            Active
          </Button>
        </div>
      </div>
    );
  }
}
FilterContainer.propTypes = {
  handleAll: PropTypes.func.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleActive: PropTypes.func.isRequired,
};

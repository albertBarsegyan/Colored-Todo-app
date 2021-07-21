export default function setAllComplete(stateList, stateName) {
  const allCompleteState = [...this.state[stateList]].map((item) => {
    const allComplete = { ...item };
    allComplete[stateName] = true;
    return allComplete;
  });
  const allUncompletedState = [...this.state[stateList]].map((item) => {
    const allComplete = { ...item };
    allComplete[stateName] = false;
    return allComplete;
  });
  if (this.state.allComplete === 'Set all Complete') {
    this.setState({ [stateList]: allCompleteState, allComplete: 'Set all uncompleted' });
    return true;
  }
  this.setState({ [stateList]: allUncompletedState, allComplete: 'Set all Complete' });
  return true;
}

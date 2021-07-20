export default function filterData(stateName, stateList) {
  if (this.state[stateList].length > 0) {
    if (this.state[stateName] === 'all') {
      return this.state[stateList];
    }
    if (this.state[stateName] === 'active') {
      return this.state[stateList].filter((item) => !item.isActive);
    }
    if (this.state[stateName] === 'completed') {
      return this.state[stateList].filter((item) => item.isActive);
    }
  }
  return this.state[stateList];
}

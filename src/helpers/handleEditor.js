export default function handleEditor(e, stateName) {
  this.setState((prevState) => ({ [stateName]: !prevState[stateName] }));
  this.setState((prevState) => {
    // if (condition) {
    // }
    if (this.state[stateName] !== false) {
      console.log('SAVE');
      return { editButtonName: 'Edit' };
    }
    return { editButtonName: 'Save' };
  });
  console.log(this.state[stateName], 'inside editor event -> ');
}

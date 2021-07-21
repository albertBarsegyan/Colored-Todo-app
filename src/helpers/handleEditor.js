export default function handleEditor(e, stateName) {
  e.stopPropagation();
  this.setState((prevState) => ({ [stateName]: !prevState[stateName] }));
  this.setState((prevState) => {
    if (prevState.editButtonName === 'Edit') {
      console.log('SAVE');
      return { editButtonName: 'Save' };
    }
    return { editButtonName: 'Edit' };
  });
  console.log(this.state[stateName], 'inside editor event -> ');
}

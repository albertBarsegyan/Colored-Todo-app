export default function handleEditor(e, stateName) {
  if (this.state.editButtonName === 'Save') {
    this.setState({ [stateName]: false });
  }
  if (this.state.editButtonName === 'Edit') {
    this.setState({ [stateName]: true });
  }

  this.setState(() => {
    if (this.state[stateName] !== false) {
      return { editButtonName: 'Edit' };
    }
    return { editButtonName: 'Save' };
  });
  console.log(this.state[stateName], 'inside editor event -> ');
}

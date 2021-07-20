export default function handleComplete(id, stateList) {
  const edited = [...this.state[stateList]].map((item) => {
    if (item.id === id) {
      const editedObject = { ...item };
      editedObject.isActive = !editedObject.isActive;
      return editedObject;
    }
    return item;
  });
  this.setState({ [stateList]: [...edited] });
  console.log(this.state[stateList]);
}

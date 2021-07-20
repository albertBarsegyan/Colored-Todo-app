export default function handleSavedData(id, stateList, savedInputValue) {
  const editedList = this.state[stateList].map((item) => {
    if (item.id === id) {
      const editedObject = { ...item };
      editedObject.inputValue = savedInputValue;
      return editedObject;
    }
    return item;
  });
  this.setState({ [stateList]: editedList });
  console.log('saved data handler ->');
}

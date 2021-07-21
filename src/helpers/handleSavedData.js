export default function handleSavedData(id, stateList, savedInputValue) {
  const editedList = this.state[stateList].map((item) => {
    if (item.id === id) {
      const editedObject = { ...item };
      editedObject.inputValue = savedInputValue;
      return editedObject;
    }
    return item;
  });

  Promise.resolve('success')
    .then(() => {
      this.setState({ [stateList]: editedList });
      return this.state[stateList];
    })
    .then((data) => {
      localStorage.setItem([stateList], JSON.stringify(data));
    });
}

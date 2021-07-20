export default function handleComplete(id, stateList) {
  const edited = [...this.state[stateList]].map((item) => {
    if (item.id === id) {
      const editedObject = { ...item };
      editedObject.isActive = !editedObject.isActive;
      return editedObject;
    }
    return item;
  });

  Promise.resolve('success')
    .then(() => {
      this.setState({ [stateList]: [...edited] });
      return this.state[stateList];
    })
    .then((data) => {
      localStorage.setItem([stateList], JSON.stringify(data));
    });
}

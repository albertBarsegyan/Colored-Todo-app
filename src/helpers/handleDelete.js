export default function handleDelete(id, stateList) {
  const todoList = this.state[stateList];
  const deleteItem = todoList.filter((item) => item.id !== id);

  Promise.resolve('success')
    .then(() => {
      this.setState({ [stateList]: deleteItem });
      return this.state[stateList];
    })
    .then((data) => {
      localStorage.setItem([stateList], JSON.stringify(data));
    });
}

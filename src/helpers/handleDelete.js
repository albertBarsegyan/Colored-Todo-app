export default function handleDelete(id, stateList) {
  const todoList = this.state[stateList];
  const deleteItem = todoList.filter((item) => item.id !== id);
  this.setState({ [stateList]: deleteItem });
  console.log('delete event handled ->', this.state);
}

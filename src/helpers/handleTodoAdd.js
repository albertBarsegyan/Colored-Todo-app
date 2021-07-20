export default function handleTodoAdd(e, targetState) {
  if (e.key === 'Enter' && e.target.value !== '') {
    const todoObject = {
      inputValue: e.target.value,
      id: Date.now(),
      isActive: false,
    };
    this.setState({ [targetState]: [...this.state[targetState], todoObject] });
    e.target.value = '';
    console.log('enter pressed in todo inpute ->', this.state[targetState]);
  }
}

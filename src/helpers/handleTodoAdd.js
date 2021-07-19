export default function handleTodoAdd(e, targetState) {
  if (e.key === 'Enter' && e.target.value !== '') {
    this.setState({ [targetState]: [...this.state[targetState], e.target.value] });
    e.target.value = '';
    console.log('enter pressed in todo inpute ->', this.state[targetState]);
  }
}

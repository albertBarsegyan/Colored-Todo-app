export default function handleTodoAdd(e, targetState) {
  if (e.key === 'Enter' && e.target.value !== '') {
    const todoObject = {
      inputValue: e.target.value,
      id: Date.now(),
      isActive: false,
    };
    Promise.resolve('success')
      .then(() => {
        this.setState({ [targetState]: [...this.state[targetState], todoObject] });
        return this.state[targetState];
      })
      .then((data) => {
        localStorage.setItem([targetState], JSON.stringify(data));
      });
  }
}

export default function handleCompleted(stateName) {
  this.setState({ [stateName]: 'completed' });
}

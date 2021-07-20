export default function handleEditor(e, stateName) {
  this.setState((prevState) => ({ [stateName]: !prevState[stateName] }));
  console.log('editor event done ->');
}

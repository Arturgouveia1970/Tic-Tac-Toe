function Square({ value }) {
  function handleClick() {
    console.log('cli')
  }
  return <button type="button" className="square">{value}</button>;
}

export default Square;

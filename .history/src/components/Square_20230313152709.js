function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button
      type="button" 
      className="square"
      onCli
    >
      {value}
    </button>
  );
}

export default Square;

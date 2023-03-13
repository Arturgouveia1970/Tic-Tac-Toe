function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button
      type="button" 
      className="square"
      onClick={handleCl}
    >
      {value}
    </button>
  );
}

export default Square;

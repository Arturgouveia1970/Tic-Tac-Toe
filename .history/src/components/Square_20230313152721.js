function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button
      type="button" 
      className="square"
      onClick={handleC
      }
    >
      {value}
    </button>
  );
}

export default Square;

function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button
      type="button" 
      className="square"
      onClick={}
    >
      {value}
    </button>
  );
}

export default Square;

import React from 'react';

function Square({value}) {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X')
  }

  return (
    <button
      type="button"
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default Square;

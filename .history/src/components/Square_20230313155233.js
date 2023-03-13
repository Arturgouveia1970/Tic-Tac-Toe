import React, { useState } from 'react';

function Square({va}) {
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

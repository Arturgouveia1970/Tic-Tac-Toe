import React, { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue()
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

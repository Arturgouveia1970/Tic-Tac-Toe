import React, { useState } from "react";

function Square() {
  const [value, setValue] = useState
  function handleClick() {
    console.log('clicked!');
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

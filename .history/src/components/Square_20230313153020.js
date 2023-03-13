import React, { useState } from "react";

function Square({ value }) {
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

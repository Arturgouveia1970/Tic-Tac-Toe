import React from 'react';
import { useState } from 'react';

function Square({ value }) {
  

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

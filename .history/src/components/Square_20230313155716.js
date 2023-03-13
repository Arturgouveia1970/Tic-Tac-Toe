import React from 'react';
import { useState } from 'react';

function Square({ value }) {
  

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

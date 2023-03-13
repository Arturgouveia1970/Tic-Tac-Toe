import React from 'react';

function Square({ value }) {
  return (
    <button type="button" className="square" onClick={onSquareClick}>
      {value}
    </button>
}

export default Square;

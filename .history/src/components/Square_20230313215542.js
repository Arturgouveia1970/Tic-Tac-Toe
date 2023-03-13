/* eslint react/prop-types: 0 */
import React from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button type="button" className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;

import React from 'react';

function Square({ value }) {
  return (
    <button type="button" className="square" onClick={on}>{value}</button>;
}

export default Square;

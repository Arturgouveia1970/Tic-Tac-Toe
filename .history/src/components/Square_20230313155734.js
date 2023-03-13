import React from 'react';
import { useState } from 'react';

function Square({ value }) {

  return (
    <button
      type="button"
      className="square"
    >
      {value}
    </button>
  );
}

export default Square;

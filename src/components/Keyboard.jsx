import React from 'react';

function Keyboard({ onKeyPress }) {
  const key1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const key2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const key3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const renderKey = (keyRow) => {
    return keyRow.map((key) => (
      <button key={key} onClick={() => onKeyPress(key)} className="keyboard-key">
        {key}
      </button>
    ))
  };

  return (
    <div className='keyboard'>
      <div className='keyboard-row'>{renderKey(key1)}</div>
      <div className='keyboard-row'>{renderKey(key2)}</div>
      <div className='keyboard-row'>
        <button onClick={() => onKeyPress('Enter')} className="keyboard-key special-key enter-key">Enter</button>
        {renderKey(key3)}
        <button onClick={() => onKeyPress('Backspace')} className="keyboard-key special-key backspace-key">⌫</button>
      </div>
    </div>
  );
}

export default Keyboard;
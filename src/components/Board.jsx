import React from 'react';

function Board({ board }) { 
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => {
            let cellClass = "cell";
            if (cell.state === "correct") {
              cellClass += " correct";
            } else if (cell.state === "wrong-position") {
              cellClass += " wrong-position";
            } else if (cell.state === "incorrect") {
              cellClass += " incorrect";
            } else if(cell.state === ""){
              cellClass +=" unsure";
            }

            return (
              <div key={cellIndex} className={cellClass}>
                {cell.letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;

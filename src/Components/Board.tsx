import React from "react";
import Cell from "./Cell";
import type { Player } from "./Types";


//komponent som visar ett spelbräde
// //Består av celler som är klickba
//när den klickas, anropar en funktion för att hantera spelets logik
interface BoardProps {
  board: (Player | null)[][];
  handleCellClick: (row: number, col: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, handleCellClick }) => {
  return (
    <div className="ResponsiveBoard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

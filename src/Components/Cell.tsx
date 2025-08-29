import React from "react";
import { Player } from "./Types";

interface CellProps {
  value: Player | null;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        border: "1px solid black",
        display: "inline-block",
        lineHeight: "50px",
        textAlign: "center",
        cursor: "pointer",
        fontSize: "24px",
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Cell;

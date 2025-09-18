//återanvändbar React-komponent för en spelcell som kan visa en spelares symbol
//  reagera på klick för att exempelvis göra ett drag i ett spel
import React from "react";
import type { Player } from "./Types";

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

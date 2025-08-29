import React from "react";
import type { Player } from "./Types";

interface StatusProps {
  winner: Player | null;
  moveCount: number;
  size: number;
  currentPlayer: Player;
}

const Status: React.FC<StatusProps> = ({
  winner,
  moveCount,
  size,
  currentPlayer,
}) => {
  if (winner) {
    return <h2> Winner: {winner}</h2>;
  }
  if (moveCount === size * size) {
    return <h2>Oavgjord match!</h2>;
  }
  return <h2> Nu spelar: {currentPlayer}</h2>;
};

export default Status;

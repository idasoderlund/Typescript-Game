import React, { useState } from "react";
import Board from "./Board";
import Controls from "./Settings";
import Status from "./Status";
import type { Player } from "./Types";

interface GameSettings {
  size: number;
  winCondition: number;
}

const defaultSettings: GameSettings = {
  size: 3,
  winCondition: 3,
};

// Funktion för att kontrollera vinnare

const checkWinner = (
  board: (Player | null)[][],
  size: number,
  winCondition: number
): Player | null => {
  //kontrollerar rader
  for (let row = 0; row < size; row++) {
    for (let col = 0; col <= size - winCondition; col++) {
      const line = board[row].slice(col, col + winCondition);
      if (line.every((cell) => cell !== null && cell === line[0])) {
        return line[0];
      }
    }
  } //blir rött i koden om denna ligger här, var observant

  //Kontrollera kolumner
  for (let col = 0; col < size; col++) {
    for (let row = 0; row <= size - winCondition; row++) {
      const line: (Player | null)[] = [];
      for (let i = 0; i < winCondition; i++) {
        line.push(board[row + i][col]);
      }
      if (line.every((cell) => cell !== null && cell === line[0])) {
        return line[0];
      }
    }
  }

  //Kontrollera diagonaler vänster till höger
  for (let row = 0; row <= size - winCondition; row++) {
    for (let col = 0; col < size; col++) {
      const line: (Player | null)[] = [];
      for (let i = 0; i < winCondition; i++) {
        line.push(board[row + i][col + i]);
      }
      if (line.every((cell) => cell !== null && cell === line[0])) {
        return line[0];
      }
    }
  }

  // kontrollera diagonaler höger till vänster
  for (let row = 0; row <= size - winCondition; row++) {
    for (let col = winCondition - 1; col < size; col++) {
      const line: (Player | null)[] = [];
      for (let i = 0; i < winCondition; i++) {
        line.push(board[row + i][col - i]);
      }
      if (line.every((cell) => cell !== null && cell === line[0])) {
        return line[0];
      }
    }
  }
  return null;
}; //Här ska det tydligen finnas en till slutklammer med cemikolon

const TicTacToe: React.FC = () => {
  const [settings, setSettings] = useState<GameSettings>(defaultSettings);
  const [board, setBoard] = useState<(Player | null)[][]>(
    Array.from({ length: defaultSettings.size }, () =>
      Array(defaultSettings.size).fill(null)
    )
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [moveCount, setMoveCount] = useState<number>(0);

  const startGame = () => {
    setBoard(
      Array.from({ length: settings.size }, () =>
        Array(settings.size).fill(null)
      )
    );
    setCurrentPlayer("X");
    setWinner(null);
    setMoveCount(0);
    setGameActive(true);
  };

  // Hantera cellklick

  const handleCellClick = (row: number, col: number) => {
    if (!gameActive || board[row][col] || winner) return;

    const newBoard = board.map((r) => r.slice());
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
    setMoveCount((prev) => prev + 1);

    const potentialWinner = checkWinner(
      newBoard,
      settings.size,
      settings.winCondition
    );
    if (potentialWinner) {
      setWinner(potentialWinner);
      setGameActive(false);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  //Hanterar storleksändring
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(e.target.value);
    if (isNaN(newSize) || newSize < 2 || newSize > 10) return;
    setSettings({ ...settings, size: newSize });
    startGame();
  };

  return (
    <div>
      <h1 style={{ fontSize: 30, color: "black", marginLeft: "30px" }}>
        Play below!
      </h1>
      <Controls
        settings={settings}
        handleSizeChange={handleSizeChange}
        startGame={startGame}
        gameActive={gameActive}
      />
      <Board board={board} handleCellClick={handleCellClick} />
      <Status
        winner={winner}
        moveCount={moveCount}
        size={settings.size}
        currentPlayer={currentPlayer}
      />
    </div>
  );
};

export default TicTacToe;

import React from "react";

interface GameSettings {
  size: number;
  winCondition: number;
}

interface ControlProps {
  settings: GameSettings;
  handleSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startGame: () => void;
  gameActive: boolean;
}

const Controls: React.FC<ControlProps> = ({
  settings,
  handleSizeChange,
  startGame,
  gameActive,
}) => {
  return (
    <div>
      <label>
        Storlek på brädet (2-10):{" "}
        <input
          type="number"
          min={2}
          max={10}
          value={settings.size}
          onChange={handleSizeChange}
          disabled={gameActive}
        />
      </label>
      <button style={{}} onClick={startGame}>
        {" "}
        Start over
      </button>
    </div>
  );
};
export default Controls;

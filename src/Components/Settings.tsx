// komponent visar en kontroll för att välja storleken på spelbrädet mellan 2 och 5.
// Den tillåter användaren att ändra storleken när spelet inte är aktivt
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
  gameActive,
}) => {
  return (
    <div>
      <label
        style={{
          fontFamily: "Shizuru",
          marginRight: "10px",
          padding: "30px",
        }}
      >
        Choose sizing on your game board (2-5):{" "}
        <input
          type="number"
          min={2}
          max={5}
          value={settings.size}
          onChange={handleSizeChange}
          disabled={gameActive}
        />
      </label>
    </div>
  );
};
export default Controls;

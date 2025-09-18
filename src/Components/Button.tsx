// component skapar en knapp som, när den klickas, anropar funktion startGame.

interface ControlButtonProps {
  startGame: () => void;
}

const Btn: React.FC<ControlButtonProps> = ({ startGame }) => {
  return (
    <div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Shizuru",
        }}
        onClick={startGame}
      >
        Start | Start over
      </button>
    </div>
  );
};
export default Btn;

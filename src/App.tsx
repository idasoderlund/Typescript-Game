import React from "react";
import "./App.css";
import TicTacToe from "./Components/TicTacToe";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        //marginLeft: "400px",
        marginTop: "40px",
      }}
      className="App"
    >
      <header className="App-header" style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: 35,
            color: "black",
            fontFamily: "Shizuru",
          }}
        >
          TicTacToe - The Ultimate Game
        </h1>
      </header>
      <TicTacToe />
    </div>
  );
}

export default App;

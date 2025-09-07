import React from "react";
import Navbar from "./components/Navbar";
import "./styles.css";

function Simulator() {
  return (
    <div className="App">
      <Navbar setGameMode={() => {}} />  {/* Navbar tanpa fungsi setGameMode */}
      <div className="header">
        <h1>Mobile Legends : Bang Bang</h1>
        <h1>Hero Guessing Game - Simulator Mode</h1>
      </div>
      <div className="simulator">
        <h2>Hello World!</h2>
      </div>
    </div>
  );
}

export default Simulator;

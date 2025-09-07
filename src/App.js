import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";  // Import Navbar
import CharacterList from "./components/CharacterList";
import GuessPanel from "./components/GuessPanel";
import "./styles.css";

import { characterList } from "./characterData";

function App() {
  const [targetCharacter, setTargetCharacter] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [status, setStatus] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [gameMode, setGameMode] = useState("Daily");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [resetTime, setResetTime] = useState(null);

  useEffect(() => {
    const calculateResetTime = () => {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0
      );
      setResetTime(nextMidnight);
    };

    if (gameMode === "Daily") {
      // Select target character for Daily mode
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1; // Months are 0-indexed
      const year = today.getFullYear();
      const urutan = ((day + month + year) + (day * month * year)) % 125;
      setTargetCharacter(characterList[urutan]);
      calculateResetTime();
    } else if (gameMode === "Infinite") {
      // Select target character for Infinite mode
      setTargetCharacter(
        characterList[Math.floor(Math.random() * characterList.length)]
      );
      setResetTime(null);
    } else {
      setTargetCharacter(null);
      setResetTime(null);
    }
    setAttempts([]);
    setStatus("");
    setGameOver(false);
  }, [gameMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleGuess = (character) => {
    if (gameOver) return;
    if (attempts.some((attempt) => attempt.nama === character.nama)) {
      alert("You've already guessed this character!");
      return;
    }

    setAttempts([...attempts, character]);
    if (character.nama === targetCharacter.nama) {
      setStatus("Congratulations! You guessed it correctly!");
      setGameOver(true);
    } else if (attempts.length >= 6) {
      setStatus("Game Over, You Failed to Guess The Character!\nThe Hero Was " + targetCharacter.nama);
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    if (gameMode === "Infinite") {
      setTargetCharacter(
        characterList[Math.floor(Math.random() * characterList.length)]
      );
    }
    setAttempts([]);
    setStatus("");
    setGameOver(false);
  };

  const getCountdownTime = () => {
    if (!resetTime) return null;
    const now = new Date();
    const timeDifference = resetTime - now;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="App">
      <Navbar setGameMode={setGameMode} />  {/* Tambahkan Navbar */}
      <div className="header">
        <p>{currentTime.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}</p>
      </div>
      <div className="title">
        <h1>Mobile Legends : Bang Bang</h1>
        <h1>Hero Guessing Game - {gameMode}</h1>
      </div>
      <p>Your Guess: {attempts.length} / 7</p>
      {gameMode !== "Simulator" && (
        <GuessPanel
          attempts={attempts}
          targetCharacter={targetCharacter}
          characterList={characterList}
          onGuess={handleGuess}
          gameOver={gameOver}
        />
      )}
      {gameMode === "Simulator" && (
        <div className="simulator">
          <h2>Comming Soon!</h2>
        </div>
      )}
      {status && (
        <div>
          <p>{status}</p>
          {gameMode === "Daily" && (
            <p>Reset in {getCountdownTime()}</p>
          )}
          {gameMode !== "Daily" && (
            <button className="restart-button" onClick={handleRestart}>
              Restart Game
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

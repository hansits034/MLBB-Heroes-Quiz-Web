import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import GuessPanel from "./components/GuessPanel";
import "./styles.css";

import fotomiya from "./PngImage/squaremiya.png";
import fotodora from "./PngImage/squaredore.png";
import fotocld from "./PngImage/squareclaude.png";
import fotomsh from "./PngImage/sqrmsh.png";
import fotophr from "./PngImage/sqrphr.png";

const characterList = [
  {
    nama: "Miya",
    tahun_rilis: 2016,
    role: "marksman",
    asal: "guardian_forrest",
    jumlah_skin: 10,
    foto: fotomiya,
  },
  {
    nama: "Eudora",
    tahun_rilis: 2016,
    role: "mage",
    asal: "guardian_forrest",
    jumlah_skin: 6,
    foto: fotodora,
  },
  {
    nama: "Claude",
    tahun_rilis: 2018,
    role: "marksman",
    asal: "eruditio",
    jumlah_skin: 5,
    foto: fotocld,
  },
  {
    nama: "Masha",
    tahun_rilis: 2018,
    role: "fighter",
    asal: "land_of_dawn",
    jumlah_skin: 5,
    foto: fotomsh,
  },
  {
    nama: "Pharsa",
    tahun_rilis: 2017,
    role: "mage",
    asal: "paxley",
    jumlah_skin: 6,
    foto: fotophr,
  },
];

function Daily() {
  const [targetCharacter, setTargetCharacter] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [status, setStatus] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const urutan = ((day + month + year) + (day * month * year)) % 5;
    setTargetCharacter(characterList[urutan]);
    setAttempts([]);
    setStatus("");
    setGameOver(false);
  }, []);

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
    } else if (attempts.length >= 5) {
      setStatus("Game Over, You Failed to Guess The Character!");
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const urutan = ((day + month + year) + (day * month * year)) % 5;
    setTargetCharacter(characterList[urutan]);
    setAttempts([]);
    setStatus("");
    setGameOver(false);
  };

  return (
    <div className="App">
      <Navbar setGameMode={() => {}} />  {/* Navbar tanpa fungsi setGameMode */}
      <div className="header">
        <p>{currentTime.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })}</p>
      </div>
      <h1>Mobile Legends : Bang Bang</h1>
      <h1>Hero Guessing Game - Daily Mode</h1>
      <p>Your Guess: {attempts.length} / 6</p>
      <GuessPanel
        attempts={attempts}
        targetCharacter={targetCharacter}
        characterList={characterList}
        onGuess={handleGuess}
        gameOver={gameOver}
      />
      {status && (
        <div>
          <p>{status}</p>
          <button className="restart-button" onClick={handleRestart}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
}

export default Daily;

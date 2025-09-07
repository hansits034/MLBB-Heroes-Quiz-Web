import React from "react";
import CharacterList from "./CharacterList";

function GuessPanel({ attempts, targetCharacter, characterList, onGuess, gameOver }) {
  return (
    <div className="guess-panel">
      <CharacterList characterList={characterList} onGuess={onGuess} gameOver={gameOver} />
      <div className="hint-header">
        <p>Photo</p>
        <p>Hero Name</p>
        <p>Release Year</p>
        <p>Role(s)</p>
        <p>Region</p>
        <p>Lane(s)</p>
      </div>
      {attempts.map((attempt, index) => {
        const getReleaseYearHint = () => {
          if (attempt.order < targetCharacter.order) {
            if (targetCharacter.order - attempt.order >= 30){
              return `>> ${attempt.tahun_rilis}`;
            }
            else{
              return `> ${attempt.tahun_rilis}`;
            }
          } else if (attempt.order > targetCharacter.order) {
            if (attempt.order - targetCharacter.order >= 30){
              return `<< ${attempt.tahun_rilis}`;
            }
            else{
              return `< ${attempt.tahun_rilis}`;
            }
          } else {
            return attempt.tahun_rilis;
          }
        };

        return (
          <div key={index} className="guess-status">
            <div
              className={
                attempt.foto === targetCharacter.foto ? "correct" : "incorrect"
              }
            >
              <img src={attempt.foto} alt={attempt.nama} />
            </div>
            <div
              className={
                attempt.nama === targetCharacter.nama ? "correct" : "incorrect"
              }
            >
              {attempt.nama}
            </div>
            <div
              className={
                attempt.tahun_rilis === targetCharacter.tahun_rilis
                  ? "correct"
                  : "incorrect"
              }
            >
              {getReleaseYearHint()}
            </div>
            <div
              className={
                attempt.role === targetCharacter.role ? "correct" : "incorrect"
              }
            >
              {attempt.role}
            </div>
            <div
              className={
                attempt.asal === targetCharacter.asal ? "correct" : "incorrect"
              }
            >
              {attempt.asal}
            </div>
            <div
              className={
                attempt.jumlah_skin === targetCharacter.jumlah_skin
                  ? "correct"
                  : "incorrect"
              }
            >
              {attempt.jumlah_skin}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GuessPanel;

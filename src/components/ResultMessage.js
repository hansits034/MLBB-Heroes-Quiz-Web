import React from 'react';

const ResultMessage = ({ gameWon }) => {
  return (
    <div className="result-message">
      {gameWon ? "Congratulations! You guessed it correctly!" : "Game Over! You failed to guess the character."}
    </div>
  );
};

export default ResultMessage;

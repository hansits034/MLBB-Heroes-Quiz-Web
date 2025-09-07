import React, { useState } from "react";

function CharacterList({ characterList, onGuess, gameOver }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = characterList.filter(character =>
    character.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="character-list">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="scrollable-list">
        {filteredCharacters.map((character, index) => (
          <div
            key={index}
            className={`character-card ${gameOver ? "disabled" : ""}`}
            onClick={() => !gameOver && onGuess(character)}
          >
            <img src={character.foto} alt={character.nama} />
            <p>{character.nama}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;

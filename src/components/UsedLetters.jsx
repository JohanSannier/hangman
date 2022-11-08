import React from "react";

const UsedLetters = ({ usedLetters }) => {
  return (
    <section className="used-letters">
      <div className="bold">Used letters:</div>
      <ul>
        {usedLetters.map((letter) => (
          <li key={letter}>{letter}</li>
        ))}
      </ul>
    </section>
  );
};

export default UsedLetters;

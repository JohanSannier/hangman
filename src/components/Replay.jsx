import React from "react";

const Replay = ({ word, resetGame, won }) => {
  return (
    <div className="replay">
      {won ? (
        <p>
          Congrats! <br />
          You guessed corectly.
        </p>
      ) : (
        <p>
          Game over! <br />
          The correct word was: {word}.
        </p>
      )}
      <span onClick={resetGame}>Replay</span>
    </div>
  );
};

export default Replay;

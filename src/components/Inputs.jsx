import React from "react";

const dataInput = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Inputs = ({ checkLetter }) => {
  return (
    <section className="data-inputs">
      <ul>
        {dataInput.map((letter) => (
          <li
            key={letter}
            className="letter"
            onClick={() => checkLetter(letter)}
          >
            {letter.toUpperCase()}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Inputs;

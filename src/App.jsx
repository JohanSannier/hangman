import React, { useState, useEffect } from "react";
import "./App.css";
import Hangman from "./components/Hangman";
import Dashes from "./components/Dashes";
import Inputs from "./components/Inputs";
import Replay from "./components/Replay";
import UsedLetters from "./components/UsedLetters";

const App = () => {
  const [word, setWord] = useState("");
  const [dashes, setDashes] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [isGameOver, setIsGameOver] = useState({ finished: false, won: false });
  const stick = document.getElementsByClassName("stick");
  let i = 0;
  const whiteSpace = document.getElementsByClassName("white-space");

  const checkLetter = (letter) => {
    if (word.includes(letter)) {
      let i = -1;
      let indizes = [];

      while ((i = word.indexOf(letter, i + 1)) !== -1) {
        whiteSpace[i].innerText = letter;
      }

      let total = 0;
      for (const space of whiteSpace) {
        if (!space.innerText.length > 0) {
          total++;
        }
      }

      if (total === 0) {
        setIsGameOver({ finished: true, won: true });
        return;
      }
    } else {
      if (i === 0) {
        stick[i].style.display = "initial";
        i++;
      } else if (i < stick.length - 1) {
        stick[i].style.display = "initial";
        i++;
      } else {
        stick[i].style.display = "initial";
        setIsGameOver({ finished: true, won: false });
      }
    }
    // setUsedLetters([...usedLetters, letter]);
  };

  const resetGame = () => {
    for (const div of stick) {
      div.style.display = "none";
    }
    for (const space of whiteSpace) {
      space.innerText = "";
    }
    getRandomWord();
    setIsGameOver({ finished: false, won: false });
  };

  const getRandomWord = () => {
    const fetchWordLength = Math.floor(Math.random() * 8) + 2;
    // to get a random word based on length, change the fetch call to be length=${fetchWordLength}
    try {
      fetch("https://random-word-api.herokuapp.com/word?length=5")
        .then((res) => res.json())
        .then((word) => {
          setWord(word[0]);
          setDashes([...word[0]]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <main>
      <h1>Hangman</h1>
      <Hangman />
      <Dashes dashes={dashes} />
      <Inputs checkLetter={checkLetter} />
      {/* <UsedLetters usedLetters={usedLetters} /> */}
      {isGameOver.finished && (
        <Replay word={word} won={isGameOver.won} resetGame={resetGame} />
      )}
    </main>
  );
};

export default App;

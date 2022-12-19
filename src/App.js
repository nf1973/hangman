import Hangman from "./components/Hangman";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import styled from "styled-components";
import { useState } from "react";
import { germanWords } from "./data/german.js";

// const wordNum = Math.floor(Math.random() * words.length);
// const word = words[wordNum].toLowerCase();

const word =
  germanWords[Math.floor(Math.random() * germanWords.length)].toLowerCase();
console.log(word); //Cheat mode!

function App() {
  const [clickedWrongKeys, setClickedWrongKeys] = useState([]);
  const [clickedRightKeys, setClickedRightKeys] = useState([]);
  const [isSolved, setIsSolved] = useState(false);
  const [isAlive, setIsAlive] = useState(true);

  let message;
  if (isSolved) {
    message = <Win>You Win - Refresh to play again</Win>;
  }
  if (!isAlive) {
    message = (
      <Lose>You Lose - The word was {word} - Refresh to play again</Lose>
    );
  }

  return (
    <div>
      <Hangman clickedWrongKeys={clickedWrongKeys} />
      <Word word={word} clickedRightKeys={clickedRightKeys} />
      <Keyboard
        clickedWrongKeys={clickedWrongKeys}
        clickedRightKeys={clickedRightKeys}
        setClickedWrongKeys={setClickedWrongKeys}
        setClickedRightKeys={setClickedRightKeys}
        word={word}
        isAlive={isAlive}
        setIsAlive={setIsAlive}
        isSolved={isSolved}
        setIsSolved={setIsSolved}
      />
      {message}
    </div>
  );
}

const Win = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #04d9ff;
  position: relative;
  top: -550px;
  background-color: #4b4b4b;
  border: 5px solid #04d9ff;
  width: 60%;
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
`;

const Lose = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #04d9ff;
  position: relative;
  top: -550px;
  background-color: #4b4b4b;
  border: 5px solid #04d9ff;
  width: 60%;
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
`;

export default App;

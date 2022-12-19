import React from "react";
import styled from "styled-components";

const keysToAdd = "abcdefghijklmnopqrstuvwxyz";
const keyArray = [...keysToAdd];

function countUnique(iterable) {
  return new Set(iterable).size;
}

function Keyboard({
  clickedWrongKeys,
  clickedRightKeys,
  setClickedWrongKeys,
  setClickedRightKeys,
  word,
  isAlive,
  setIsAlive,
  isSolved,
  setIsSolved,
}) {
  const uniqueLetters = countUnique(word.split(""));

  const clickKey = (e) => {
    if (word.includes(e)) {
      setClickedRightKeys((clickedRightKeys) => [...clickedRightKeys, e]);

      if (clickedRightKeys.length + 1 >= uniqueLetters) {
        setIsSolved(true);
      }
    } else {
      setClickedWrongKeys((clickedWrongKeys) => [...clickedWrongKeys, e]);
      if (clickedWrongKeys.length >= 7) {
        setIsAlive(false);
      }
    }
  };

  return (
    <AllKeys>
      {keyArray.map((key, index) => {
        if (clickedWrongKeys.includes(key)) {
          return <KeyButtonWrong key={index}>{key}</KeyButtonWrong>;
        } else if (clickedRightKeys.includes(key)) {
          return <KeyButtonRight key={index}>{key}</KeyButtonRight>;
        } else {
          return (
            <KeyButton onClick={() => clickKey(key)} key={index}>
              {key}
            </KeyButton>
          );
        }
      })}
    </AllKeys>
  );
}

export default Keyboard;

//CSS Below
const AllKeys = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(65px, 1fr));
  justify-content: space-evenly;
  gap: 1rem;
  margin: 40px;
`;

const KeyButton = styled.button`
  border: 1px solid #04d9ff;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: none;
  aspect-ratio: 1/1;
  border-radius: 5px;
  color: #04d9ff;

  :hover {
    background-color: #04d9ff;
    color: #4b4b4b;
  }
`;

const KeyButtonWrong = styled.button`
  border: 1px solid #00677a;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: none;
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-color: #3d3d3d;
  color: #00677a;
`;

const KeyButtonRight = styled.button`
  border: 1px solid black;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: none;
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-color: #04d9ff;
  color: #4b4b4b;
`;

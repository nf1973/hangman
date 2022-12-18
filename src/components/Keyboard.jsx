import React from "react";
import styled from "styled-components";

const keysToAdd = "abcdefghijklmnopqrstuvwxyz";
const keyArray = [...keysToAdd];

const clickedKeys = ["a", "f", "z"];

function Keyboard() {
  return (
    <AllKeys>
      {keyArray.map((key, index) => {
        if (clickedKeys.includes(key)) {
          return <KeyButtonDisabled key={index}>{key}</KeyButtonDisabled>;
        } else {
          return <KeyButton key={index}>{key}</KeyButton>;
        }
      })}
    </AllKeys>
  );
}

export default Keyboard;

//CSS Below
const AllKeys = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: space-evenly;
  gap: 2rem;
  margin: 40px;
`;

const KeyButton = styled.button`
  border: 1px solid black;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: none;
  aspect-ratio: 1/1;
  border-radius: 5px;

  :hover {
    background-color: blue;
    color: white;
  }

  > disabled {
    background-color: #444;
    color: ddd;
  }
`;

const KeyButtonDisabled = styled.button`
  border: 1px solid black;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: none;
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-color: #3e3e3e;
  color: #9c9c9c;
`;

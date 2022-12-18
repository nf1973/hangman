import React from "react";
import styled from "styled-components";

function Word({ word, clickedRightKeys }) {
  const wordArray = [...word];
  return (
    <Letters>
      {wordArray.map((ltr, index) => {
        if (clickedRightKeys.includes(ltr)) {
          return <Letter key={index}>{ltr}</Letter>;
        } else {
          return <Letter key={index}>&nbsp;</Letter>;
        }
      })}
    </Letters>
  );
}

const Letters = styled.div`
  margin: 0 auto;
  width: 300px;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
`;

const Letter = styled.div`
  border-bottom: 5px solid black;
  min-width: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 3rem;
`;

export default Word;

import React from "react";
import hm from "./Hangman.module.css";

function Hangman({ clickedWrongKeys }) {
  const bodyParts = [
    "support",
    "necksupport",
    "head",
    "body",
    "rightarm",
    "leftarm",
    "rightleg",
    "leftleg",
  ];

  const lostLives = clickedWrongKeys.length;

  const drawBodyParts = bodyParts.splice(0, lostLives);

  let drawSupport;
  let drawNeckSupport;
  let drawHead;
  let drawBody;
  let drawRightArm;
  let drawLeftArm;
  let drawRightLeg;
  let drawLeftLeg;

  if (drawBodyParts.includes("support")) {
    drawSupport = hm.hmSupport;
  }

  if (drawBodyParts.includes("necksupport")) {
    drawNeckSupport = hm.hmNeckSupport;
  }
  if (drawBodyParts.includes("head")) {
    drawHead = hm.hmHead;
  }
  if (drawBodyParts.includes("body")) {
    drawBody = hm.hmBody;
  }
  if (drawBodyParts.includes("rightarm")) {
    drawRightArm = hm.hmRightArm;
  }
  if (drawBodyParts.includes("leftarm")) {
    drawLeftArm = hm.hmLeftArm;
  }
  if (drawBodyParts.includes("rightleg")) {
    drawRightLeg = hm.hmRightLeg;
  }
  if (drawBodyParts.includes("leftleg")) {
    drawLeftLeg = hm.hmLeftLeg;
  }

  return (
    <div className={hm.hmArea}>
      <div className={hm.hmPole}></div>
      <div className={hm.hmBase}></div>
      <div className={drawSupport}></div>
      <div className={drawNeckSupport}></div>
      <div className={drawHead}></div>
      <div className={drawBody}></div>
      <div className={drawLeftArm}></div>
      <div className={drawRightArm}></div>
      <div className={drawLeftLeg}></div>
      <div className={drawRightLeg}></div>
    </div>
  );
}

export default Hangman;

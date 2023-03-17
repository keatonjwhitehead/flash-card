import React, { useState } from "react";

export default function Card({ frontSide, backSide }) {
  const [isFront, changeSide] = useState(true);
  function handleClick() {
    changeSide((oldState) => !oldState);
  }
  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`;

  return (
    <div className={classList} onClick={handleClick}>
      {" "}
      {text}{" "}
    </div>
  );
}

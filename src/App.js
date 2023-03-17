import React, { useState } from "react";
import Card from "./Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <h2> Click on the card to reveal the solution </h2>
      <Card frontSide="2*2" backSide="4" />
      <Card frontSide="2*6" backSide="12" />
      <Card frontSide="2*8" backSide="16" />
    </div>
  );
}

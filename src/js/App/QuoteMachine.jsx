import React, { useState, useEffect } from "react";
import quotes from "../data/quotes.json";
import colorsPalette from "../data/colors-palette.json";

export default function QuoteMachine() {
  const timeToNextQuote = 10;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextRefresh, setNextRefresh] = useState(timeToNextQuote);

  const handleClick = () => {};

  useEffect(() => {}, []);

  return (
    <>
      <div></div>
    </>
  );
}

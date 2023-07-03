import React, { useState, useEffect } from "react";
import quotes from "../data/quotes.json";
import colorsPalette from "../data/colors-palette.json";

export default function DrumMachine() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {};

  useEffect(() => {}, []);

  return (
    <>
      <div id="grid-box">
        <div id="pad-box">
          <div id="pad1" className="pads"></div>
          <div id="pad2" className="pads"></div>
          <div id="pad3" className="pads"></div>
          <div id="pad4" className="pads"></div>
          <div id="pad5" className="pads"></div>
          <div id="pad6" className="pads"></div>
          <div id="pad7" className="pads"></div>
          <div id="pad8" className="pads"></div>
          <div id="pad9" className="pads"></div>
        </div>
        <div id="control-box"></div>
      </div>
    </>
  );
}

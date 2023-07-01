import React, { useState, useEffect } from "react";
import quotes from "../data/quotes.json";
import colorsPalette from "../data/colors-palette.json";
import imagesTitles from "../data/images-titles.json";

export default function QuoteMachine() {
  const timeToNextQuote = 10;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextRefresh, setNextRefresh] = useState(timeToNextQuote);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === quotes.length - 1 ? 0 : prevIndex + 1;
    });
    document.body.style.backgroundImage = `url("../images/${
      imagesTitles[Math.round(Math.random() * imagesTitles.length)]
    }")`;
    // document.body.style.backgroundColor =
    //   colorsPalette[Math.round(Math.random() * colorsPalette.length)];
    setNextRefresh(timeToNextQuote);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNextRefresh((prevTime) => {
        if (prevTime === 1) {
          handleClick();
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="row justify-content-center align-items-center">
      <div className="card text-center">
        <div className="card-header">Random Quote Machine</div>
        <div className="card-body">
          <h5 id="author" className="card-title">
            {`${quotes[currentIndex].author}`}
          </h5>
          <p id="text" className="card-text">
            {`${quotes[currentIndex].quote}`}
          </p>
          <button
            onClick={handleClick}
            id="new-quote"
            href="#"
            className="btn btn-primary">
            Następny cytat
          </button>
        </div>
        <div className="card-footer text-body-secondary">{nextRefresh}</div>
      </div>
    </div>
  );
}

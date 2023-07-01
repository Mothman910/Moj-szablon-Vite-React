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
    document.body.style.backgroundImage = `url("./images/${
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
      <div className="card text-center quote-machine">
        <div className="card-header">Random Quote Machine</div>
        <div className="card-body">
          <h5 id="author" className="card-title">
            {`${quotes[currentIndex].author}`}
          </h5>
          <p id="text" className="card-text">
            {`${quotes[currentIndex].quote}`}
          </p>
          <div className="buttons row justify-content-between justify-content-sm-start gap-3 position-relative">
            <a
              className="btn button position-relative"
              id="share-quote"
              title="Udostępnij ten cytat!"
              target="_blank"
              href="https://www.facebook.com/sharer.php?u=http://localhost:8080"
              style={{ backgroundColor: "rgb(39, 174, 96)" }}>
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn button position-relative"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_blank"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&amp;related=mothman910&amp;text=${quotes[currentIndex].quote}`}>
              <i class="fa fa-twitter"></i>
            </a>
            <div className="row position-absolute justify-content-center button-row">
              <button
                onClick={handleClick}
                id="new-quote"
                href="#"
                className="btn btn-primary col-7 col-sm-4 col-lg-4">
                Następny cytat
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer">{nextRefresh}</div>
      </div>
    </div>
  );
}

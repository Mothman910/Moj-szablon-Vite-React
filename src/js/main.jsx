// Import our custom CSS
// import "../scss/styles.scss";

// Import React
import React from "react";
import { createRoot } from "react-dom/client";

// Import Components
import DrumMachine from "./App/DrumMachine.jsx";

const root = createRoot(document.getElementById("Drum-box"));
root.render(
  <>
    <DrumMachine />
  </>
);

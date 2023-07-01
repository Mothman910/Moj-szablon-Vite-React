// Import our custom CSS
import "../scss/styles.scss";

// Import React
import React from "react";
import { createRoot } from "react-dom/client";

// Import Components
import QuoteMachine from "./App/QuoteMachine.jsx";
// function QuoteMachine() {
//   return <h1>Blabla</h1>;
// }

const root = createRoot(document.getElementById("quote-box"));
root.render(
  <>
    <QuoteMachine />
  </>
);

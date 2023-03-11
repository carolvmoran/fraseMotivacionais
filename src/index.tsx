import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Frases from "./pages/Frases";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Frases />
  </React.StrictMode>
);

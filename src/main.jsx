import React from "react";
import { createRoot } from "react-dom/client";
//import BrowserRouter
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* wrap app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

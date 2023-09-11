import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { YouTubeProvider } from "./context/youTubeContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <YouTubeProvider>
    <App />
  </YouTubeProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"; // <-- added

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker for offline support
serviceWorkerRegistration.register();

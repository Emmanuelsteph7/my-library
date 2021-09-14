import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AlertProvider from "./components/alert/AlertContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AlertProvider>
        <App />
      </AlertProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

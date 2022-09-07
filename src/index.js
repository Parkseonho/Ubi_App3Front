import ReactDOM from "react-dom/client";
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from "./page/Home";
import App from "./App";
import TestPage from "./page/TestPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

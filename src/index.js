import ReactDOM from "react-dom/client";
import * as React from 'react';
import TestPage from "./page/TestPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TestPage />
  </React.StrictMode>
);

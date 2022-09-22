import ReactDOM from "react-dom/client";
import * as React from 'react';
import TestPage from "./page/TestPage";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <TestPage />
    </RecoilRoot>
  </React.StrictMode>
);

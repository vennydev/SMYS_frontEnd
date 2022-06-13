import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //   </Provider>
);

reportWebVitals();

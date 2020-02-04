import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const ERRORS_COUNT = 3;

const root = document.querySelector(`#root`);
ReactDOM.render(<App errorsCount={ERRORS_COUNT}/>, root);

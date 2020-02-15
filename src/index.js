import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {questions} from "./mocks/questions";

const ERRORS_COUNT = 3;

const root = document.querySelector(`#root`);
ReactDOM.render(<App errorsCount={ERRORS_COUNT} questions={questions}/>, root);

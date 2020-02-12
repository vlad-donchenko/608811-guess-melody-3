import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={welcomeButtonHandler}/>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;

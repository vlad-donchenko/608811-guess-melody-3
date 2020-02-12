import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const handleWelcomeButton = () => {};

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={handleWelcomeButton}/>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;

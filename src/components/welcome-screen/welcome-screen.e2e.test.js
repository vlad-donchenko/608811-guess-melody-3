import React from "react";
import {shallow} from "enzyme";
import WelcomeScreen from "./welcome-screen";

it(`Should welcome button be pressed`, () => {
  const welcomeButtonClickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen errorsCount={3} onWelcomeButtonClick={welcomeButtonClickHandler}/>);
  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(welcomeButtonClickHandler.mock.calls.length).toBe(1);
});

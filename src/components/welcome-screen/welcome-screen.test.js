import React from "react";
import renderer from "react-test-renderer";
import App from "./welcome-screen";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      errorsCount={3}
      onWelcomeButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

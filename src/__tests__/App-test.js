/**
 * @format
 */
import 'react-native';
import {act} from "@testing-library/react";

import React from 'react';
import {shallow, mount} from 'enzyme';
// import React from 'react';
import App, {Button, generateButtons} from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  renderer.create(<App />);
});

it('generateButtons()', () => {
  const app = renderer.create(<App />);
  const appInstance = app.root;
  expect(appInstance.findAllByType(Button).length).toEqual(3);
});

it('buttonPressHandler', () => {
  const app = renderer.create(<App />);
  const instance = app.getInstance();
  const appInstance = app.root;
  const buttons = appInstance.findAllByType(Button)
  // console.log(buttons[0]);
  // act(buttons[0].props.onPress);
  // console.log(instance);
  // expect(instance.backgroundColor).toEqual('#1275e6');
});

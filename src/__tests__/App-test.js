/**
 * @format
 */
import 'react-native';

import React from 'react';
import {shallow, mount} from 'enzyme';
// import React from 'react';
import App, {Button} from '../App';

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

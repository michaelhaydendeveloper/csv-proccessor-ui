import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreenModule from '../SplashScreenModule';

test('renders correctly', () => {
    const tree = renderer.create(<SplashScreenModule />).toJSON();
    expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreenModule from '../SplashScreenModule';
import {TouchableHighlight} from "react-native";
import {act} from "@testing-library/react";

test('renders correctly', () => {
    const tree = renderer.create(<SplashScreenModule />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('setModalVisible()', () => {
    const splashScreenModule = renderer.create(<SplashScreenModule />);
    // console.log('splashScreenModule.getInstance()', splashScreenModule.getInstance());
    const instance = splashScreenModule.getInstance();
    expect(instance.state.modalVisible).toBe(false);
    instance.setModalVisible(true);
    expect(instance.state.modalVisible).toBe(true);
});

test('onRequestCloseHandler()', () => {
    const splashScreenModule = renderer.create(<SplashScreenModule />);
    const instance = splashScreenModule.getInstance();
    instance.setModalVisible(true);
    expect(instance.state.modalVisible).toBe(true);
    instance.onRequestCloseHandler();
    expect(instance.state.modalVisible).toBe(false);
});

test('TouchableHighlights', () => {
    // arrange
    const splashScreenModule = renderer.create(<SplashScreenModule />);
    const instance = splashScreenModule.root;
    // assert and act
    // show modal button
    expect(instance.findAllByType(TouchableHighlight).length).toEqual(2);
    act(instance.findAllByType(TouchableHighlight)[1].props.onPress);
    expect(splashScreenModule.getInstance().state.modalVisible).toBe(true);
    // hide modal button
    act(instance.findAllByType(TouchableHighlight)[0].props.onPress);
    expect(splashScreenModule.getInstance().state.modalVisible).toBe(false);
});


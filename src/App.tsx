import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableHighlight,
  StatusBar,
} from 'react-native';

import HeaderModule from './HeaderModule/HeaderModule';
import MainModule from "./MainModule/MainModule";
import FooterModule from "./FooterModule/FooterModule";

export default function App() {
  const { width } = useWindowDimensions();
  const [backgroundColor, setState] = useState<string>('#1275e6');

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={[styles.root, { backgroundColor }]}>
        <View style={[styles.content, width > 900 && styles.contenBig]}>
          <HeaderModule />
          <MainModule />
          {generateButtons(setState)}
          <FooterModule />
        </View>
      </View>
    </>
  );
}

const buttonConfigs = [
  {
    label: 'Change to orange',
    backgroundColor: '#fabe0a',
  },
  {
    label: 'Change to green',
    backgroundColor: '#31bd52',
  },
  {
    label: 'Change to red',
    backgroundColor: '#cf4c4c',
  },
];

export function generateButtons(onPressHandler:Function){
  const buttons = [];
  for(let i = 0; i < buttonConfigs.length; i++) {
    const label = buttonConfigs[i].label;
    const backgroundColor = buttonConfigs[i].backgroundColor;
    buttons.push(
        <Button
            key={`button-${backgroundColor}`}
            label={label}
            backgroundColor={backgroundColor}
            onPress={() => onPressHandler(backgroundColor)}
        />
    );
  }
  return <View testID='generated-buttons'>{buttons}</View>;
};

export function Button({
  label,
  onPress,
  backgroundColor,
}: {
  label: string;
  onPress: () => any;
  backgroundColor?: string;
}) {
  return (
    <TouchableHighlight
      accessible={true}
      accessibilityLabel={label}
      underlayColor={'rgba(0,0,0,0.5)'}
      style={styles.button}
      onPress={onPress}
    >
      <View
        style={[styles.buttonInner, !!backgroundColor && { backgroundColor }]}
      >
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  paragraph: {
    color: '#000',
    fontSize: 16,
    marginTop: 12,
  },
  content: {
    maxWidth: 600,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.28,
    shadowRadius: 16.0,
    elevation: 24,
    padding: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
  contenBig: {
    padding: 40,
    paddingLeft: 40,
    paddingRight: 40,
  },
  button: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 12,
  },
  buttonInner: {
    minHeight: 46,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enter: { height: 20 },
});

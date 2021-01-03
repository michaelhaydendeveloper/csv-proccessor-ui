import { View, Text, StyleSheet } from 'react-native';
import './HeaderModule.web.css';
import SplashScreenModule from "../SplashScreenModule/SplashScreenModule";

export default function HeaderModule() {
  return (
    <View style={styles.container}>
      <Text>WEB :: HEADER</Text>
      <SplashScreenModule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
  },
});

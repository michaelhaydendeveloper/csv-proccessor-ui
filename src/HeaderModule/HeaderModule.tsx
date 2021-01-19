import { View, Text, StyleSheet } from 'react-native';
import SplashScreenModule from "../SplashScreenModule/SplashScreenModule";

export default function HeaderModule() {
    let name = 'Mike';
    if(name === 'Mike') {
        name = 'Rb';
    }

  return (
    <View style={styles.container}>
      <Text>{name} MOBILE :: HEADER</Text>
      <SplashScreenModule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
  },
});

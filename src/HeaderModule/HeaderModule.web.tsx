import { View, Text, StyleSheet } from 'react-native';
import './HeaderModule.web.css';

export default function HeaderModule() {
  return (
    <View style={styles.container}>
      <Text>WEB :: HEADER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
  },
});

import { View, Text, StyleSheet } from 'react-native';

export default function HeaderModule() {
  return (
    <View style={styles.container}>
      <Text>MOBILE :: HEADER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
  },
});

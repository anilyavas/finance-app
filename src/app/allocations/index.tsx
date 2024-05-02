import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, Stack } from 'expo-router';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Allocations' }} />
      <Text>Allocations</Text>
      <Link href={'/allocations/new'}>New Allocation</Link>
      <StatusBar style='auto' />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

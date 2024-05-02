import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const NewAllocationScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'New Allocation' }} />
      <Text>New Allocation</Text>
    </View>
  );
};

export default NewAllocationScreen;
const styles = StyleSheet.create({});

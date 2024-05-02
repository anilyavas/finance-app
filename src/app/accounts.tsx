import { View, Text, StyleSheet } from 'react-native';
import AccountsList from '../components/AccountsList';

const AccounstsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <AccountsList />
    </View>
  );
};

export default AccounstsScreen;
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  subContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
});

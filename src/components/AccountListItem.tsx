import { View, Text, StyleSheet } from 'react-native';

const AccountListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profit</Text>
      <Text style={styles.percentage}>10%</Text>
      <Text style={styles.percentage}>20%</Text>
    </View>
  );
};

export default AccountListItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  percentage: {},
});

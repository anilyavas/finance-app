import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import AccountsList from '../components/AccountsList';
import { useState } from 'react';

const AccounstsScreen = () => {
  const [name, setName] = useState('');
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');

  const createAccount = () => {
    console.warn('create account');
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
      <AccountsList />
      <View style={styles.inputRow}>
        <TextInput
          placeholder='Name'
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder='CAP %'
          style={styles.input}
          value={cap}
          onChangeText={setCap}
        />
        <TextInput
          placeholder='TAP %'
          style={styles.input}
          value={tap}
          onChangeText={setTap}
        />
      </View>
      <Button title='Add account' onPress={createAccount} />
    </View>
  );
};

export default AccounstsScreen;
const styles = StyleSheet.create({
  container: {
    padding: 5,
    gap: 5,
  },
  subContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
  },
});

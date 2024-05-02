import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AccountListItem from './AccountListItem';

const AccountsList = () => {
  return (
    <>
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={[1, 2, 3]}
        renderItem={() => <AccountListItem />}
      />
    </>
  );
};

export default AccountsList;
const styles = StyleSheet.create({});

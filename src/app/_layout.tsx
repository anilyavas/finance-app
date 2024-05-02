import { Slot, Stack, Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='allocations'
        options={{
          title: 'Allocations',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='account-tree' color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='accounts'
        options={{
          title: 'Accounts',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name='account-balance-wallet'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  );
};

export default RootLayout;

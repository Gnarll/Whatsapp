import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthForm from './components/AuthForm';
import { useAuth } from './useAuth';
import Conversations from './screens/Conversations';
import Home from './screens/Home';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Conversation" component={Conversations} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthForm} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;

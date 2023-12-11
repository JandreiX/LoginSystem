import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import RecoveryPass from './RecoveryPass'; // Update import statement
import LandingPage from './LandingPage'; // Update import statement

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen name="Login" component={LoginScreen} options={screenOptions} />
      <Stack.Screen name="Signup" component={SignupScreen} options={screenOptions} />
      <Stack.Screen name="Home" component={HomeScreen} options={screenOptions} />
      <Stack.Screen name="RecoveryPass" component={RecoveryPass} options={screenOptions} />
      <Stack.Screen name="LandingPage" component={LandingPage} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

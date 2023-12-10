import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen'; 
import ForgotPasswordScreen from './RecoveryPass';
import LoginSignupButtons from './LandingPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RecoveryPass" component={ForgotPasswordScreen}/>
      <Stack.Screen name="LandingPage" component={LoginSignupButtons}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;

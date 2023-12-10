// LoginSignupButtons.js
import React from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

const LoginSignupButtons = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../image/AppLogo.png')}
        style={styles.image}
        resizeMode="contain" 
      />

      <Text style={styles.title}>Scholapp</Text>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Signup" onPress={handleSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81c1db'
  },
  image: {
    width: '80%', 
    height: 200, 
    marginBottom: 20, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
});

export default LoginSignupButtons;

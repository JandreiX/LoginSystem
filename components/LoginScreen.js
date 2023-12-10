// LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home');
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate('RecoveryPass');
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Image component */}
        <Image
          source={require('../image/AppLogo.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
          <Text style={styles.forgotPasswordLink} onPress={handleForgotPassword}>
            Forgot your password?
          </Text>
          <Text style={styles.signUpLink} onPress={handleSignUp}>
            Don't have an account? Sign up here.
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81c1db',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '80%',
    padding: 22,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center', 
  },
  forgotPasswordLink: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
  },
  signUpLink: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black', 
  },
  image: {
    width: '80%', 
    height: 200, 
    marginBottom: 20, 
  },
});

export default LoginScreen;

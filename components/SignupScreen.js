import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      setErrorMessage('Please complete all fields to register an account.');
    } else {
      // Your registration logic here
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image component */}
      <Image
        source={require('../image/AppLogo.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />

        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Already have an account? Login here.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81c1db',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '80%',
    padding: 22,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginLink: {
    marginTop: 10,
    textAlign: 'center',
    color: 'black',
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RegisterScreen;
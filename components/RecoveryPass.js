// ForgotPasswordScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    navigation.navigate('Login');
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

        <Text style={styles.title}>Forgot Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.buttonContainer}>
        <Button title="Reset Password" onPress={handleResetPassword} />
        </View>
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Remember your password? Login here.
        </Text>
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
    marginTop: 20,
    color: 'black',
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
});

export default ForgotPasswordScreen;

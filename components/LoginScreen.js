import React from 'react';
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
import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginScreen = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      username: yup.string().required('Username is required'),
      password: yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      if (values.username && values.password) {
        navigation.navigate('Home');
      } else {
        alert('Please enter both username and password.');
      }
    },
  });

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
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
        />
        <Text style={styles.errorText}>{formik.touched.username && formik.errors.username}</Text>

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
        <Text style={styles.errorText}>{formik.touched.password && formik.errors.password}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={formik.handleSubmit} />
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
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default LoginScreen;

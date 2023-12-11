import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const RegisterScreen = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      password: yup.string().required('Password is required'),
    }),
    
    onSubmit: (values) => {
      // Your registration logic here
      navigation.navigate('Home');
    },
  });

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
        value={formik.values.name}
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
      />
      <Text style={styles.errorText}>{formik.touched.name && formik.errors.name}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
      />
      <Text style={styles.errorText}>{formik.touched.email && formik.errors.email}</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
      />
      <Text style={styles.errorText}>{formik.touched.password && formik.errors.password}</Text>

      {formik.errors.form && (
        <Text style={styles.errorMessage}>{formik.errors.form}</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={formik.handleSubmit} />

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
  errorText: {
    color: 'red',
    marginBottom: 8,
    // Add the following lines to allow error text to wrap to the next line
    width: '100%',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default RegisterScreen;
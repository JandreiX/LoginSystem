import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Image component */}
      <Image
        source={require('../image/AppLogo.png')}
        style={styles.image}
        resizeMode="contain" 
      />
      
      <Text style={styles.title}>
        Welcome to Scholapp!
      </Text>

      <View style={styles.buttonContainer}>
        <Button title='Logout' onPress={handleLogout} />
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
  buttonContainer: {
    width: '80%',
    marginTop: 20, // Add some spacing between the title and the button
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24, // Increase font size for a more prominent title
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
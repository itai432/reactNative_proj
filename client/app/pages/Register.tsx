import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenWrapper from '../components/ScreenWrapper';

function Register() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} >
        <Text>register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}
      >
        <Text style={styles.registerText}>already have an account ? press here to login</Text>
      </TouchableOpacity>
    </View>
    </ScreenWrapper>
  );
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  registerText: {
    marginTop: 15,
    color: 'blue',
  },
});
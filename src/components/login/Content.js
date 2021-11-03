/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Image } from 'react-native';
import styles from './Content.styles';
import { useNavigation } from '@react-navigation/native';
import navigationConstants from '../../constants/navigationConstants';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Content = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Doing validation on input fields
  const validateForm = () => {
    if (!email) {
      Alert.alert('DemoApp', 'Please enter email address');
      return;
    } else if (!emailRegex.test(email)) {
      Alert.alert('DemoApp','Please provide a valid email address');
      return;
    } else if (!password) {
      Alert.alert('DemoApp', 'Please enter password');
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: navigationConstants.LANDING.screenName }],
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/logo192.png')} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={validateForm}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Content;

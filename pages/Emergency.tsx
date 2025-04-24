import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type EmergencyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,'Emergency'>

const Emergency = () => {
  const navigation = useNavigation<EmergencyScreenNavigationProp>();

  const handleYellowEmergency = () => {
    // Handle yellow emergency logic (e.g., suggest hospitals, notify relatives)
    Alert.alert('Yellow Emergency', 'Analyzing condition and suggesting nearby hospitals...');
  };

  const handleRedEmergency = () => {
    // Handle red emergency logic (e.g., call ambulance, notify relatives)
    Alert.alert('Red Emergency', 'Alerting ambulance service and notifying your relatives...');
  };

  const handleBlueEmergency = () => {
    // Handle blue emergency logic (e.g., alert nearby people and notify ambulance)
    Alert.alert('Blue Emergency', 'Alerting nearby people and calling an ambulance...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Actions</Text>
      <Button title="Yellow Emergency" onPress={handleYellowEmergency} />
      <Button title="Red Emergency" onPress={handleRedEmergency} />
      <Button title="Blue Emergency" onPress={handleBlueEmergency} />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fce4ec',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Emergency;
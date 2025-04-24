import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HealthMonitorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,'HealthMonitor'>

const HealthMonitor = () => {
  const navigation = useNavigation<HealthMonitorScreenNavigationProp>();

  const [heartRate, setHeartRate] = useState(75); // mock value for heart rate
  const [bloodPressure, setBloodPressure] = useState('120/80'); // mock value for blood pressure
  const [bloodSugar, setBloodSugar] = useState(95); // mock value for blood sugar

  // Function to simulate health stat updates
  const simulateHealthStats = () => {
    setHeartRate(Math.floor(Math.random() * (100 - 60 + 1)) + 60); // Random heart rate between 60-100
    
    setBloodSugar(Math.floor(Math.random() * (120 - 70 + 1)) + 70); // Random blood sugar between 70-120
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Monitoring</Text>
      
      <Text style={styles.statText}>❤ Heart Rate: {heartRate} bpm</Text>
      <Text style={styles.statText}>💉 Blood Pressure: {bloodPressure} mmHg</Text>
      <Text style={styles.statText}>🍭 Blood Sugar: {bloodSugar} mg/dL</Text>

      <Button title="Simulate Health Stats" onPress={simulateHealthStats} />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff3e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  statText: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HealthMonitor;
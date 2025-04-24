import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import MedicalRecords from '../pages/MedicalRecords';
import Certificates from '../pages/Certificates';
import Emergency from '../pages/Emergency';
import Reminders from '../pages/Reminders';
import Profile from '../pages/Profile';
import DoctorAI from '../pages/DoctorAI';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Home: undefined; // No parameters needed for Home
    Profile: undefined; // No parameters for Profile
    MedicalRecords: undefined; // No parameters for MedicalRecords
    Emergency: undefined; // No parameters for Emergency
    Reminders: undefined; // No parameters for Reminders
    HealthMonitor: undefined; // No parameters for HealthMonitor
  };
const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MedicalRecords" component={MedicalRecords} />
    <Stack.Screen name="Certificates" component={Certificates} />
    <Stack.Screen name="Emergency" component={Emergency} />
    <Stack.Screen name="Reminders" component={Reminders} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="DoctorAI" component={DoctorAI} />
  </Stack.Navigator>
);

export default AppNavigator;
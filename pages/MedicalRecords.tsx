import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

 type MedicalRecordsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MedicalRecords'>

const MedicalRecords = () => {
  const navigation = useNavigation<MedicalRecordsScreenNavigationProp>();

  const gotoEmergency = () => {
    navigation.navigate('Emergency');
  }
  const [medicalCondition, setMedicalCondition] = useState('Heart disease');
  const [doctor, setDoctor] = useState('Dr. Smith');
  const [doctorContact, setDoctorContact] = useState('+1234567890');
  const [medicines, setMedicines] = useState('Aspirin');
  const [allergies, setAllergies] = useState('Penicillin');

  const handleSaveMedicalRecords = () => {
    // Here, you can add logic to save medical records to storage or backend
    Alert.alert('Medical Records Updated', 'Your medical records have been successfully updated.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Medical Records</Text>
      <TextInput
        style={styles.input}
        placeholder="Medical Condition"
        value={medicalCondition}
        onChangeText={setMedicalCondition}
      />
      <TextInput
        style={styles.input}
        placeholder="Doctor's Name"
        value={doctor}
        onChangeText={setDoctor}
      />
      <TextInput
        style={styles.input}
        placeholder="Doctor's Contact"
        value={doctorContact}
        onChangeText={setDoctorContact}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Medicines"
        value={medicines}
        onChangeText={setMedicines}
      />
      <TextInput
        style={styles.input}
        placeholder="Allergies"
        value={allergies}
        onChangeText={setAllergies}
      />
      <Button title="Save Medical Records" onPress={handleSaveMedicalRecords}/>
      <Button title="Back to Home" onPress={gotoEmergency} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f5e9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});

export default MedicalRecords;
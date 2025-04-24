import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importing the type

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  
  const [name, setName] = useState('John Doe');  // Default name
  const [email, setEmail] = useState('johndoe@example.com');  // Default email
  const [phone, setPhone] = useState('+1234567890');  // Default phone number

  const handleSaveProfile = () => {
    // You can save the profile to local storage or backend here
    Alert.alert('Profile Updated', 'Your profile has been successfully updated.');
  };
  const gotoHome = () =>{
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Button title="Save Profile" onPress={handleSaveProfile} />
      <Button title="Back to Home" onPress={gotoHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
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

export default Profile;
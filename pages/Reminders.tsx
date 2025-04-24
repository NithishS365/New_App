import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type RemindersScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,'Reminders'>



const Reminders = () => {
  const navigation = useNavigation<RemindersScreenNavigationProp>();
  const [reminder, setReminder] = useState('');
  const [reminderList, setReminderList] = useState<string[]>([]);

  const addReminder = () => {
    if (!reminder.trim()) {
      Alert.alert('Input required', 'Please enter a reminder.');
      return;
    }
    setReminderList([...reminderList, reminder]);
    setReminder('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Reminders</Text>
      <TextInput
        style={styles.input}
        placeholder="E.g. Take medicine at 9 AM"
        value={reminder}
        onChangeText={setReminder}
      />
      <Button title="Add Reminder" onPress={addReminder} />

      <FlatList
        data={reminderList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderText}>• {item}</Text>
          </View>
        )}
        style={styles.list}
      />

      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f5e9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  reminderItem: {
    backgroundColor: '#c8e6c9',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  reminderText: {
    fontSize: 16,
  },
  list: {
    marginTop: 10,
  },
});

export default Reminders;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const DoctorAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = '🧑‍💬: ${input}';
    const botReply = '🤖 Doctor AI: I am analyzing your symptoms. Please wait...';

    setMessages(prev => [...prev, userMessage, botReply]);
    setInput('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {messages.map((msg, index) => (
        <Text key={index} style={styles.message}>{msg}</Text>
      ))}
      <TextInput
        style={styles.input}
        placeholder="Describe your symptoms..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Send" onPress={sendMessage} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  message: { marginVertical: 5, fontSize: 16 },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    padding: 10, marginBottom: 10,
  },
});

export default DoctorAI;
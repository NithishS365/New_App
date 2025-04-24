import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const Certificates = () => {
  const [certificates, setCertificates] = useState<string[]>([]);

  
const handleUpload = async () => {
  const result = await DocumentPicker.getDocumentAsync({ type: '/' });

  if (result.assets && result.assets.length > 0) {
    const file = result.assets[0];
    setCertificates([...certificates, file.name]);
    
  } 
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medical Certificates</Text>
      <Button title="Upload Certificate" onPress={handleUpload} />
      <FlatList
        data={certificates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>📄 {item}</Text>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#e3f2fd' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  item: {
    backgroundColor: '#bbdefb',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  text: { fontSize: 16 },
});

export default Certificates;
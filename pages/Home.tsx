import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator"; // ✅ Make sure this path is correct!

const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // ✅ typed correctly

  const handleEmergency = (type: string) => {
    Alert.alert(
      `${type} Emergency Triggered`,
      `Processing ${type.toLowerCase()} protocol...`
    );
    // Add logic for AI analysis, hospital location, and alerts here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pocket Doctor</Text>
      <Text style={styles.subtitle}>Choose an Emergency Mode</Text>

      <TouchableOpacity
        style={[styles.emergencyButton, { backgroundColor: "#fdd835" }]}
        onPress={() => handleEmergency("Yellow")}
      >
        <Text style={styles.buttonText}>🟡 Yellow Emergency</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.emergencyButton, { backgroundColor: "#e53935" }]}
        onPress={() => handleEmergency("Red")}
      >
        <Text style={styles.buttonText}>🔴 Red Emergency</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.emergencyButton, { backgroundColor: "#1e88e5" }]}
        onPress={() => handleEmergency("Blue")}
      >
        <Text style={styles.buttonText}>🔵 Blue Emergency</Text>
      </TouchableOpacity>

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate("MedicalRecords")}>
          <Text style={styles.menuItem}>📄 Medical Records</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HealthMonitor")}>
          <Text style={styles.menuItem}>📊 Health Monitor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("DoctorAI")}>
          <Text style={styles.menuItem}>🧠 Ask Doctor AI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Reminders")}>
          <Text style={styles.menuItem}>⏰ Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Appointments")}>
          <Text style={styles.menuItem}>📅 Appointments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.menuItem}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 20,
  },
  emergencyButton: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  menu: {
    marginTop: 30,
    alignItems: "flex-start",
    width: "100%",
  },
  menuItem: {
    fontSize: 16,
    marginVertical: 8,
    color: "#1565c0",
    paddingLeft: 10,
  },
});

export default Home;

import { Text, View, StyleSheet } from "react-native";

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List</Text>
      <Text style={styles.subtitle}>Your grocery list will appear here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});


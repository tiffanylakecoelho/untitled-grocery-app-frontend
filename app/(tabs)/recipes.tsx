import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function RecipesScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconSpace}>
          <Image
              source={require("@/assets/images/icons/search-icon.svg")}
              style={{ width: 24, height: 24 }}
            />
        </View>
        <Text style={styles.headerTitle}>Recipes</Text>
        <View style={styles.iconSpace}>
          <Image
              source={require("@/assets/images/icons/create-icon.svg")}
              style={{ width: 24, height: 24 }}
            />
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Recipes</Text>
        <Text style={styles.subtitle}>Your recipes will appear here</Text>
      </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  iconSpace: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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


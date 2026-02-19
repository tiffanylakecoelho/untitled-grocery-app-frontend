import { Image } from "expo-image";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          tabBarIcon: () => (
            <Image
                source={require("@/assets/images/icons/list-icon.svg")}
                style={styles.image}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: "Recipes",
          tabBarIcon: () => (
            <Image
                source={require("@/assets/images/icons/recipe-icon.svg")}
                style={styles.image}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="planner"
        options={{
          title: "Planner",
          tabBarIcon: () => (
            <Image
                source={require("@/assets/images/icons/planner-icon.svg")}
                style={styles.image}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    paddingBottom: 33,
    paddingTop: 8,
    backgroundColor: "#ffffff",
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "500",
  },
  image: {
    width: 24,
    height: 24
  }
})
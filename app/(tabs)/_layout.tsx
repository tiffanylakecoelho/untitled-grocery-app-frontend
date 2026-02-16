import { Image } from "expo-image";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 85,
          paddingBottom: 33,
          paddingTop: 8,
          backgroundColor: "#ffffff",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          tabBarIcon: () => (
            <Image
                source={require("@/assets/images/icons/list-icon.svg")}
                style={{ width: 24, height: 24 }}
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
                style={{ width: 24, height: 24 }}
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
                style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}


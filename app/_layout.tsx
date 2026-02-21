import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen // Creates the effect of the screen sliding up on the Create Recipe Screen
        name="create-recipe" 
        options={{ 
          presentation: 'fullScreenModal',
          animation: 'slide_from_bottom' // This is the key part
        }} 
      />
    </Stack>
}

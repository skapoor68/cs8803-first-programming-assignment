import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: "CS 8803 First Programming Assignment"
        }} 
      />
    </Stack>
  );
}
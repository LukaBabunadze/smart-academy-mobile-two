import { Stack } from "expo-router";
import { Platform } from "react-native";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        animation: Platform.OS === "android" ? "simple_push" : "ios_from_right",
        headerShown: false,
      }}
    >
      <Stack.Screen name="[id]" />
    </Stack>
  );
};

export default _layout;

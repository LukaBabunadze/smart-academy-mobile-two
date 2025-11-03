import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();
  const checkUser = async () => {
    const user = await AsyncStorage.getItem("userToken");
    if (JSON.parse(user)) {
      router.replace("/(tabs)");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="products"
        options={{ headerTitle: "Details", headerBackTitle: "products" }}
      />
    </Stack>
  );
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const index = () => {
  const router = useRouter();

  const handleSubmit = async () => {
    const credentials = { username: "johnd", password: "m38rmF$" };
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (result?.token) {
      await AsyncStorage.setItem("userToken", JSON.stringify(result.token));
      router.replace("/(tabs)");
    }
  };
  return (
    <View>
      <TextInput style={styles.input} placeholder="username" />
      <TextInput style={styles.input} placeholder="password" />
      <Button title="Submit" onPress={handleSubmit} />
      <Link href={"/(auth)/register"}>
        <Text>Go To Register Page</Text>
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    margin: 12,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
});

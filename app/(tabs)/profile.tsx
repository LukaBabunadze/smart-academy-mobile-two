import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const profile = () => {
  const router = useRouter()
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    router.dismissTo('/(auth)')
  };
  return (
    <View>
      <Text>profile</Text>
      <Button onPress={handleLogout} title="Log Out" />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});

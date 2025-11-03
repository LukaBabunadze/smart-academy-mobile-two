import { useLocalSearchParams, usePathname } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductDetails = () => {
  const pathname = usePathname();
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>ProductDetails</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});

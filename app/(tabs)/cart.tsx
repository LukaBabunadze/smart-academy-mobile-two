import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const cart = () => {
  return (
    <View>
      <Pressable style={styles.searchWrapper}>
        <View style={styles.searchIcon}>
          <Feather name="search" size={24} color="black" />
        </View>
        <TextInput style={styles.input} placeholder="search" />
      </Pressable>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: 'red',
    flexDirection: 'row'
  }
});

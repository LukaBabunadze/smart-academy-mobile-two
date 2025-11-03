import Feather from "@expo/vector-icons/Feather";
import React, { useRef } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";

const AppInput = () => {
  const inputRef = useRef<TextInput | null>(null);

  const handleSearchFocus = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };
  return (
    <Pressable style={styles.searchWrapper} onPress={handleSearchFocus}>
      <Feather name="search" size={16} color="#dedede" />
      <TextInput ref={inputRef} style={styles.input} placeholder="search" />
    </Pressable>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: "white",
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    columnGap: 12,
    borderRadius: 10,
    elevation: 1,
  },
  input: {
    flex: 1,
  },
});

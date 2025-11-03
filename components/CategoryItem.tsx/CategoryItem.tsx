import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type CategoryItemProps = {
  category: {
    id: number;
    title: string;
    icon: React.JSX.Element;
    color: string;
  };
  setChosenCategory: (title: string) => void;
};

const CategoryItem = ({ category, setChosenCategory }: CategoryItemProps) => {
  return (
    <Pressable
      key={category.id}
      style={styles.catIcon}
      onPress={() => setChosenCategory(category.title)}
    >
      <View style={[styles.icon, { backgroundColor: category.color }]}>
        {category.icon}
      </View>
      <Text>{category.title}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  catIcon: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    height: 48,
    width: 48,
    borderRadius: "50%",
    borderWidth: 2.5,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

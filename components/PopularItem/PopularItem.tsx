import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

type PopularItemProps = {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

const PopularItem = ({ product }: PopularItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          source={product.image}
          style={{ width: 50, height: 60, marginTop: 16 }}
        />
        <View style={{ position: "absolute", right: 10, top: 8 }}>
          <MaterialCommunityIcons name="cards-heart" size={16} color="red" />
        </View>
      </View>
      <View style={{paddingHorizontal: 16, gap: 8, marginTop: 12,}}>
        <Text numberOfLines={1} style={{fontSize: 10}}>{product.title}</Text>
        <Text numberOfLines={2} style={{fontSize: 8}}>{product.description}</Text>
      </View>
    </View>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 120,
    backgroundColor: "white",
    borderRadius: 12,
    marginRight: 16,
  },
  imgWrapper: {
    position: "relative",
    width: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

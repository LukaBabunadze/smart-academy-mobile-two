import AppInput from "@/components/AppInput/AppInput";
import CategoryItem from "@/components/CategoryItem.tsx/CategoryItem";
import PopularItem from "@/components/PopularItem/PopularItem";
import SeactionHeader from "@/components/SeactionHeader/SeactionHeader";
import { CARD_DATA, CATEGORY_DATA, POPULAR_PRODUCTS } from "@/utils/data";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;

const cart = () => {
  const [chosenCategory, setChosenCategory] = useState<string | null>(null);
  return (
    <View>
      <AppInput />
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollview}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        {CARD_DATA.map((card) => (
          <View key={card.id} style={styles.cardItem}>
            <View style={styles.titleWrapper}>
              <View style={styles.todayWrapper}>
                <Text style={styles.today}>Today</Text>
              </View>
              <Text>{card.title}</Text>
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={card.image}
                placeholder={card.title}
                style={styles.image}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <SeactionHeader title={"Popular"} />
        <ScrollView
          horizontal
          contentContainerStyle={styles.catScrollView}
          showsHorizontalScrollIndicator={false}
        >
          {CATEGORY_DATA.map((category) => (
            <CategoryItem
              category={category}
              setChosenCategory={setChosenCategory}
            />
          ))}
        </ScrollView>
      </View>
      <View>
        <SeactionHeader title={"Category"} />
        <ScrollView
          style={styles.popularScrollview}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {POPULAR_PRODUCTS.map((product) => (
            <PopularItem product={product} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  scrollview: {
    gap: 32,
    paddingHorizontal: 16,
  },
  cardItem: {
    height: 130,
    backgroundColor: "#d3e1ed",
    width: windowWidth - 32,
    flexDirection: "row",
    borderRadius: 10,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 24,
    gap: 16,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100,
  },
  todayWrapper: {
    backgroundColor: "white",
    width: 56,
    borderRadius: 24,
    paddingHorizontal: 4,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  today: {
    textTransform: "uppercase",
    fontSize: 13,
  },
  catScrollView: {
    columnGap: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
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
  popularScrollview: {
    paddingHorizontal: 16,
  },
});
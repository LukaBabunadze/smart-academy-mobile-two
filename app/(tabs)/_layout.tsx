import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        animation: "shift",
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Products",
          tabBarLabel: "products",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="shop" size={focused ? 24 : 22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerTitle: " ",
          tabBarLabel: "cart",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="shopping-cart"
              size={focused ? 24 : 22}
              color={color}
            />
          ),
          headerRight: () => (
            <View style={{marginRight: 16}}>
              <FontAwesome5 name="bell" size={20} color="black" />
            </View>
          ),
          headerLeft: () => (
            <View style={{marginLeft: 16,}}>
              <Text style={{
                fontSize: 18,
                fontWeight: 500,
              }}>PharmaMate</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#d7f0f5'
          }
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarLabel: "profile",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="user" size={focused ? 24 : 22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

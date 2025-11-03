import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

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
          headerTitle: "My Cart",
          tabBarLabel: "cart",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name="shopping-cart"
              size={focused ? 24 : 22}
              color={color}
            />
          ),
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

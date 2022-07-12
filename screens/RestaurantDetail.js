import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";
// import { Divider } from "@rneui/themed";

export default function RestaurantDetail({ route, navigation }) {
  const routeParams = route.params;

  return (
    <View>
      <About route={routeParams ? routeParams : {}} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />

      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}

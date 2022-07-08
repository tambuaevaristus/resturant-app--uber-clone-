import { View, Text } from "react-native";
import React from "react";
import About from "../components/restaurantDetails/About";
import { Divider } from 'react-native-elements'
import MenuItems from "../components/restaurantDetails/MenuItems";
// import { Divider } from "@rneui/themed";

export default function RestaurantDetail({route}) {
  const routeParams = route.params;

  console.log("routeparams :  >"+ routeParams.name);
  return (
    <View>
      <About route={routeParams? routeParams : { }}/>
       <Divider width={1.8} style={{marginVertical:20}} />

       <MenuItems />
    </View>
  );
}

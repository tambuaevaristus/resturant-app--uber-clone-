import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
    </View>
  );
}

const RestaurantImage = () => (
 <>
  <Image
    source={{ uri: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300" }}
    style={{ width: "100%", height: 180 }}
  />
  <TouchableOpacity style={{position: "absolute", right:20, top:20}}>
    <MaterialCommunityIcons name = 'heart-outline' size={25} color="#fff" />
  </TouchableOpacity>
 </>
);

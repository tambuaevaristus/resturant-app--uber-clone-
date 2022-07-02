import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Categories from "./Categories";

export const localRestaurants = [
  {
    name: "Titis Kitchen",
    image_url:"https://media-cdn.tripadvisor.com/media/photo-s/1a/b8/46/6d/london-stock.jpg",
    Categories: ["cafe", "bar"],
    price: "FCFA",
    reviews: 1345,
    rating: 3.7,
  },
  {
    name: "Taisty Fried Chicken",
    image_url:"https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?s=170667a",
    Categories: ["cafe", "bar"],
    price: "FCFA",
    reviews: 1345,
    rating: 2.7,
  },
  {
    name: "Las Restaurant",
    image_url:"https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    Categories: ["cafe"],
    price: "FCFA",
    reviews: 1345,
    rating: 3.7,
  },
  {
    name: "Real Kitchen",
    image_url:"https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    Categories: ["cafe", "bar"],
    price: "FCFA",
    reviews: 1345,
    rating: 3,
  },
  {
    name: "UB Restau Kitchen",
    image_url:"https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
    Categories: ["cafe", "bar"],
    price: "FCFA",
    reviews: 1345,
    rating: 4.2,
  },
];

export default function RestaurantItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restaurantData.map((restaurant, index) => (
        <View
        key = {index} 
        style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url}/>
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image
}}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 min</Text>
    </View>

    <View
      style={{
        backgroundColor: "#eee",
        color: "gray",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);

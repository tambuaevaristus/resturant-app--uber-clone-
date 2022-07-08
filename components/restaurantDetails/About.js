import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {
  const { name, image, price, reviews, rating, categories } = props.route;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image? image : "https://static.onecms.io/wp-content/uploads/sites/9/2021/03/19/what-tiktok-gets-wrong-about-fufu-FT-BLOG0321.jpg"} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <>
  {console.log(props.image)}
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} /></>
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);

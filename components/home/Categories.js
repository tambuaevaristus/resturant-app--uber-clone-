import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pickup",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drink",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee and Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View style={{
        marginTop:5,
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingLeft:20,

    }} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* loop start here */}

      {items.map((item, index) => (
        <View style={{ alignItems: "center", marginRight: 30 }}>
          <Image
            source={item.image}
            key={index}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: "900",
            }}
          >
            {item.text}
          </Text>
        </View>
      ))}

      {/* loop ends here */}
    </ScrollView>
    </View>
  );
}

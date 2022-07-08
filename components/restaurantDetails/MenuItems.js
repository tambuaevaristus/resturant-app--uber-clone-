import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
const foods = [
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
];

const MenuItems = () => {
  return (
   <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index)=>(
             <View key={index}>
             <View style={styles.menuItemStyle}>
               <BouncyCheckbox iconStyle={{borderColor:"lightgray", borderRadius:0 }} fillColor="green" />
               <FoodInfo food={food} /> 
               <FoodImage food={food} />
             </View>
             <Divider width={0.5} style={{marginHorizontal: 20 }}/>
           </View>
        ))}
   </ScrollView>
  );
};

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    {/* <Image
      source={{ uri: props.food.image }}
        // source=require({props.food.image})}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    /> */}
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default MenuItems;

import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Chicken Saurce1",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce2",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce3",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce4",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce5",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce6",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce7",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce8",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
  {
    title: "Chicken Saurce9",
    description: "this is high quality chicken saurce",
    price: "5000FCFA",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGttoVRq2H2QFUDfmTQQBhdHDaIfOIeZW9KYG5SP4Y0KwOsL86pMNDLwm7YUegeunuwZ4&usqp=CAU",
  },
];

const MenuItems = ({ restaurantName }) => {
  const dispatch = useDispatch();
  const selectedItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
         restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems)=>(
    Boolean(cartItems.find((item) =>item.title===food.title))
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectedItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} style={{ marginHorizontal: 20 }} />
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

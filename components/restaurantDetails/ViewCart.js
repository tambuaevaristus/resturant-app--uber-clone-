import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import OrderItem from "./OrderItem";
import { db } from "../../firebase";
import { collection, addDoc, setDoc, doc, getFirestore } from "firebase/firestore";
import { format } from "date-fns";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const orderRef = collection(db, "orders");
  const antherCollection = collection(db, "month");
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const total = items
    .map((item) => Number(item.price.replace("FCFA", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalFCFA = total.toLocaleString("en", {
    style: "currency",
    currency: "FCFA",
  });

  // const addOrderToFireBase = () => {
  //   // const db = getFirestore(app);
  //   addDoc(orderRef, {
  //     items: {items},
  //     restaurantName: restaurantName,
  //     // createdAt: db.FieldValue.serverTimestamp(),
  //   }).then(() => {
  //     console.log("Added");
  //   });

  //   console.log("working");
  //   setModalVisible(false);
  // };

  const addCollection = async()=>{
    // const variable = format(Date.now(), "MMM");

    // setDoc(doc(db, 'orders', variable)).collection(variable, "newCollection");

    await addDoc(collection(db, "orders", ), {
    //  item:cartItems
    }).then(()=>{
      console.log("successfull")
    });
    
    console.log(cartItems)
  }
  console.log(cartItems)

  const style = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },
    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });
  const checkOutModalContent = () => {
    return (
      <View style={style.modalContainer}>
        <View style={style.modalCheckoutContainer}>
          <Text style={style.restaurantName}>{restaurantName}</Text>
          {items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}

          <View style={style.subtotalContainer}>
            <Text style={style.subtotalText}>Subtotal</Text>
            <Text>{totalFCFA}</Text>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={addCollection}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  //   console.log(total);

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkOutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 320,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 50,
                padding: 10,
                borderRadius: 30,

                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalFCFA}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

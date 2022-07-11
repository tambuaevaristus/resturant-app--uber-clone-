import { View, Text, TouchableOpacity, Modal} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "react-native-gesture-handler";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("FCFA", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalFCFA = total.toLocaleString("en", {
    style: "currency",
    currency: "FCFA",
  });

  const checkOutModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
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
                flexDirection:"row",
                justifyContent: "space-between",
                paddingHorizontal: 50,
                padding:10,
                borderRadius: 30,

                width: 300,
                position: "relative",
              }}
              onPress={ ()=> setModalVisible(true)}
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

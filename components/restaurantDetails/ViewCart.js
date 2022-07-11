import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("FCFA", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalFCFA = total.toLocaleString("en", {
    style: "currency",
    currency: "FCFA",
  });

  console.log(total);
  return (
    <>
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

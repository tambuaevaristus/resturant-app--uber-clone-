import { View, Text, TextInput } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({cityHandler}) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
          paddingLeft: 10,
          paddingVertical:5,
          width:"95%"
        }}
      >
        <TextInput
          placeholder="searchoo"
          onChangeText={(city) => {
            cityHandler(city);
            // console.log("city: " + city)
          }}
          style={{
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 5,
          }}
        />
      </View>

      {/* <GooglePlacesAutocomplete
        placeholder="searchoo"
        onChange={(data, details = null) => {
          console.log(data.target.value);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 5,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            paddingLeft: 10,
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign name="clockcircle" size={11} />
            <Text>Search</Text>
          </View>
        )}
      /> */}
    </View>
  );
}

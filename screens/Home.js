import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
// import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import SearchBar from "../components/home/SearchBar";
const YELP_API_KEY =
  "yfa_z3k_0tioMuD2zKPH0RhtYLn8CnLhg8uxtbBimeGWHK04aubE2wKJtdeMn1LK4wGGCR1ILPve_2v-uZapw8CXfqUkXW30sIKLoirygKFekefO6KoILiV766PAYnYx";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    // This is not your API key boy
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab])

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTabs />
    </SafeAreaView>
  );
}

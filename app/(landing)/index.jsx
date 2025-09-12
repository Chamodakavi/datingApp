import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Layout from "./layout";
import SearchBar from "./searchBar";
import TrendingDestinations from "./destinationCard"; // import the card component

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HERO_IMAGE = require("./couple.jpg");

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [travelers, setTravelers] = useState(2);

  return (
    <Layout>
      {/* Hero Image */}
      <View style={styles.heroWrapper}>
        <ImageBackground
          source={HERO_IMAGE}
          style={styles.heroImage}
          imageStyle={{ borderRadius: 14 }}
        ></ImageBackground>
      </View>

      {/* Search Bar */}
      <SearchBar
        onDateChange={setSelectedDate}
        travelers={travelers}
        setTravelers={setTravelers}
      />

      {/* Headline */}
      <Text style={styles.heroTitle}>
        Endless nights, endless whispers, and a love that never fades.
      </Text>

      {/* Trending Destination Cards */}
      <TrendingDestinations />

      {/* Explore Section */}
      <Text style={styles.exploreTitle}>EXPLORE BY</Text>
      <View style={styles.exploreRow}>
        <ExploreButton text="Romantic Escapes" />
        <ExploreButton text="Adventure Trips" />
        <ExploreButton text="Adventure Retreat" />
        <ExploreButton text="Beach Breaks" />
      </View>
    </Layout>
  );
}

function ExploreButton({ text }) {
  return (
    <TouchableOpacity style={styles.exploreButton}>
      <Text style={styles.exploreButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  heroWrapper: {
    width: wp("90%"),
    height: hp("20%"),
    marginBottom: hp("2%"),
    alignSelf: "center",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    borderRadius: wp("3%"),
    overflow: "hidden",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#b1473c",
    borderWidth: wp("0.3%"),
    borderRadius: wp("4%"),
    paddingVertical: hp("1.2%"),
    paddingHorizontal: wp("3.5%"),
    width: wp("90%"),
    marginBottom: hp("1.5%"),
    alignSelf: "center",
    height: hp("6%"),
  },
  searchText: {
    color: "#b1473c",
    fontSize: wp("4.5%"),
    fontWeight: "600",
    marginHorizontal: wp("1.5%"),
  },
  iconSpace: {
    marginHorizontal: wp("3%"),
  },
  heroTitle: {
    color: "#fff",
    fontSize: wp("7.5%"),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: hp("1.5%"),
    letterSpacing: wp("0.3%"),
  },
  exploreTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: hp("1%"),
    alignSelf: "flex-start",
    marginLeft: wp("7%"),
    fontSize: wp("3.6%"),
    marginTop: hp("1%"),
  },
  exploreRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: wp("96%"),
    marginBottom: hp("2%"),
    flexWrap: "wrap",
  },
  exploreButton: {
    borderWidth: wp("0.3%"),
    borderColor: "#b1473c",
    borderRadius: wp("8%"),
    paddingVertical: hp("1.3%"),
    paddingHorizontal: wp("3%"),
    marginHorizontal: wp("1.2%"),
    marginBottom: hp("1.2%"),
    minWidth: wp("22%"),
    alignItems: "center",
  },
  exploreButtonText: {
    color: "#b1473c",
    fontWeight: "700",
    fontSize: wp("3.5%"),
    textAlign: "center",
  },
});

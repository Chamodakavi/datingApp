import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Layout({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome name="heart" size={wp("7%")} color="#b1473c" />
        <Text style={styles.headerTitle}> Couple's Quest</Text>
        <Ionicons
          name="paper-plane"
          size={wp("6%")}
          color="#b1473c"
          style={{ marginLeft: wp("2%") }}
        />
      </View>
      {/* Render children (rest of the screens content) inside ScrollView */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: hp("8%") + insets.bottom }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
      <View
        style={[
          styles.tabs,
          { paddingBottom: insets.bottom, height: hp("8%") + insets.bottom },
        ]}
      >
        <TabIcon label="Home" name="home" />
        <TabIcon label="Explore" name="search" />
        <TabIcon label="Saved" name="bookmark" />
        <TabIcon label="Profile" name="user" />
      </View>
    </SafeAreaView>
  );
}

function TabIcon({ label, name }) {
  return (
    <View style={styles.tab}>
      <FontAwesome name={name} size={22} color="#b1473c" />
      <Text style={styles.tabLabel}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18171c",
    alignItems: "center",
    paddingHorizontal: wp("0%"),
    paddingTop: hp("1.5%"),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
    marginBottom: hp("1.5%"),
  },
  headerTitle: {
    color: "#b1473c",
    fontWeight: "bold",
    fontSize: wp("5%"),
    marginLeft: wp("1%"),
    letterSpacing: wp("0.3%"),
  },
  headerSubtitle: {
    color: "#b1473c",
    marginBottom: hp("1%"),
    fontSize: wp("3.5%"),
  },
  tabs: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#222",
    backgroundColor: "#18171c",
    zIndex: 10,
  },
  tab: {
    alignItems: "center",
  },
  tabLabel: {
    color: "#b1473c",
    fontSize: wp("3.2%"),
    marginTop: hp("0.3%"),
  },
});

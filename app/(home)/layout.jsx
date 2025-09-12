import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Layout = ({ children }) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#18171c" />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18171c",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});

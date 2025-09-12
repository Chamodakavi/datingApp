import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "./layout";
import ExploreCard from "./exploreCard";

const explore = () => {
  return (
    <Layout>
      <View>
        <Text>explore</Text>
        <ExploreCard />
      </View>
    </Layout>
  );
};

export default explore;

const styles = StyleSheet.create({});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const destinations = [
  {
    id: "1",
    name: "Paris",
    details: "The city of lights and love",
    image: {
      uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    id: "2",
    name: "Maldives",
    details: "Tropical paradise with crystal clear waters",
    image: {
      uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    id: "3",
    name: "New York",
    details: "The city that never sleeps",
    image: {
      uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },
  },
  {
    id: "4",
    name: "Tokyo",
    details: "A blend of tradition and modernity",
    image: {
      uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    },
  },
];

const windowWidth = Dimensions.get("window").width;

const TrendingDestinations = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Destinations</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {destinations.map((dest) => (
          <View key={dest.id} style={styles.card}>
            <Image source={dest.image} style={styles.image} />
            <Text style={styles.placeName}>{dest.name}</Text>
            <Text style={styles.details}>{dest.details}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingDestinations;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 10,
    color: "#b1473c",
  },
  scrollContent: {
    paddingLeft: 16,
  },
  card: {
    width: windowWidth * 0.6,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: "#222025",
    overflow: "hidden",
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 140,
  },
  placeName: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    marginHorizontal: 10,
    color: "#b1473c",
  },
  details: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 12,
    color: "#eee",
  },
});

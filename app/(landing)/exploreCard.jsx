import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ExploreCard = ({
  image,
  title = "Santorin, Greece",
  description = "Flights & Hotels From $1820",
  subText = "From $1500",
  liked = false,
  onLike,
}) => {
  return (
    <View style={styles.cardOuter}>
      <ImageBackground
        source={image}
        style={styles.bg}
        imageStyle={styles.bgImage}
      >
        <View style={styles.overlay} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.subText}>{subText}</Text>
          <View style={styles.heartRow}>
            {[0, 1, 2, 3, 4].map((n) => (
              <TouchableOpacity key={n} onPress={onLike} activeOpacity={0.7}>
                <FontAwesome
                  name={liked ? "heart" : "heart-o"}
                  color="#ff6b81"
                  size={18}
                  style={{ marginRight: 6 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  cardOuter: {
    borderRadius: 18,
    backgroundColor: "#292026",
    overflow: "hidden",
    marginVertical: 16,
    marginHorizontal: 16,
    elevation: 5,
    shadowColor: "#ff6b81",
    shadowOpacity: 0.15,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 6 },
  },
  bg: {
    width: 320,
    height: 180,
    justifyContent: "flex-end",
  },
  bgImage: {
    borderRadius: 18,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(27,14,18,0.35)",
    borderRadius: 18,
  },
  infoContainer: {
    padding: 18,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
    textShadowColor: "#0008",
    textShadowRadius: 3,
  },
  description: {
    color: "#ffe0e5",
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 2,
    textShadowColor: "#0009",
    textShadowRadius: 2,
  },
  subText: {
    color: "#ff6b81",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
    textShadowColor: "#0007",
    textShadowRadius: 1,
  },
  heartRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

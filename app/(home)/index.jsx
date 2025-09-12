import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import Layout from "./layout"; // adjust relative path as needed
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LogoImg = require("./abcd.png");

const index = () => {
  const router = useRouter();

  return (
    <Layout>
      {/* Logo Illustration */}
      <View style={styles.logoContainer}>
        <Image source={LogoImg} style={styles.logo} />
      </View>
      <Text style={styles.title}>NIGHTS & WHISPERS</Text>
      <Text style={styles.subtitle}>Book Your Romantic Escape</Text>

      {/* Login Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="you@email.com"
          placeholderTextColor="#e88"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#e88"
          secureTextEntry
        />

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.replace("/(landing)")}
          >
            <Text style={styles.loginText}>LOG IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/signUp")}
            style={styles.signupButton}
          >
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default index;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp("2.5%"),
    borderRadius: wp("20%"),
    height: wp("50%"),
    width: wp("50%"),
  },
  logo: {
    height: wp("90%"),
    width: wp("45%"),
    marginBottom: 0,
    borderRadius: wp("22.5%"),
    resizeMode: "cover",
  },
  title: {
    fontSize: wp("7%"),
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1.2,
    textAlign: "center",
    marginBottom: hp("0.75%"),
  },
  subtitle: {
    fontSize: wp("3.5%"),
    color: "#fff",
    opacity: 0.7,
    textAlign: "center",
    marginBottom: hp("3.5%"),
  },
  form: {
    width: "100%",
    alignItems: "center",
    marginBottom: hp("4.5%"),
  },
  input: {
    width: "100%",
    height: hp("6%"),
    backgroundColor: "#1d1b23",
    borderColor: "#e5357b",
    borderWidth: 1,
    borderRadius: wp("2.5%"),
    color: "#fff",
    fontSize: wp("4%"),
    paddingHorizontal: wp("4%"),
    marginBottom: hp("2%"),
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: hp("1.5%"),
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#e5357b",
    paddingVertical: hp("1.5%"),
    borderRadius: wp("2.5%"),
    alignItems: "center",
    marginRight: wp("2%"),
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("4%"),
    letterSpacing: 1,
  },
  signupButton: {
    flex: 1,
    borderColor: "#e5357b",
    borderWidth: 1,
    paddingVertical: hp("1.5%"),
    borderRadius: wp("2.5%"),
    alignItems: "center",
    marginLeft: wp("2%"),
  },
  signupText: {
    color: "#e5357b",
    fontWeight: "bold",
    fontSize: wp("4%"),
    letterSpacing: 1,
  },
  forgot: {
    color: "#e88",
    marginTop: hp("1.5%"),
    fontSize: wp("3.5%"),
    opacity: 0.8,
  },
});

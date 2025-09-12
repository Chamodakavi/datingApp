import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Layout from "./layout";
import { router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LogoImg = require("./abcd.png"); // Use your existing logo image

const SignUp = () => {
  return (
    <Layout>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={LogoImg} style={styles.logo} />
        </View>

        <Text style={styles.title}>CREATE ACCOUNT</Text>
        <Text style={styles.subtitle}>Join Nights & Whispers</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#e88"
        />
        <TextInput
          style={styles.input}
          placeholder="you@email.com"
          placeholderTextColor="#e88"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#e88"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#e88"
          secureTextEntry
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backLogin}
          onPress={() => {
            router.replace("/");
          }}
        >
          <Text style={styles.backLoginText}>
            Already have an account? Log In
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: hp("2%"),
  },
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
    marginBottom: hp("1%"),
    textAlign: "center",
  },
  subtitle: {
    fontSize: wp("3.5%"),
    color: "#fff",
    opacity: 0.7,
    marginBottom: hp("4%"),
    textAlign: "center",
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
  signupButton: {
    width: "100%",
    backgroundColor: "#e5357b",
    paddingVertical: hp("1.5%"),
    borderRadius: wp("2.5%"),
    alignItems: "center",
    marginVertical: hp("2%"),
  },
  signupText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("4.5%"),
    letterSpacing: 1,
  },
  backLogin: {
    marginTop: hp("1.5%"),
  },
  backLoginText: {
    color: "#e88",
    textAlign: "center",
    fontSize: wp("3.5%"),
    opacity: 0.8,
  },
});

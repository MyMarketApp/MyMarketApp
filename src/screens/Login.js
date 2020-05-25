import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "react-native-button";
import LoginInput from "../components/LoginInput";
import ajax from "../services/Routes";
import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "421984500214-2v08hjd6s9budpcfdhpblt7dfae90thu.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "421984500214-mas44cslkk85en2g7vvo9qeo20gtoloh.apps.googleusercontent.com";

const Login = (props) => {
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("LoginScreen.js.js 21 | ", result);
        props.navigation.navigate("Stores");
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log("LoginScreen.js.js 30 | Error with login", e);
      return { error: true };
    }
  };
  const verifyLogin = async (email, password) => {
    const response = await ajax.getUser(email, password);
    if (response.status && response.body) props.navigation.navigate("Stores");
    else alert("GG");
  };
  return (
    <View style={styles.Login}>
      <View style={styles.Header}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/Flash.png")}
        />
      </View>
      <LoginInput style={styles.LoginInput} onLogin={verifyLogin} />
      <View style={styles.Footer}>
        <Button style={styles.Button} onPress={signInWithGoogle}>
          CONTINUAR CON GOOGLE
        </Button>
        {/* <Text style={{ color: "white" }}>¿Olvido contraseña?</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  LoginInput: {
    flex: 1,
  },
  Header: {
    width: "100%",
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  Footer: {
    width: "100%",
    flex: 0.4,
    backgroundColor: "blue",
    alignItems: "center",
    paddingTop: 20,
  },
  Button: {
    backgroundColor: "#fff",
    textAlignVertical: "center",
    color: "green",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 360,
  },
});

export default Login;

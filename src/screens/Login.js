import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "react-native-button";
import LoginInput from "../components/LoginInput";
import ajax from "../services/Routes";
import * as Google from "expo-google-app-auth";
import { connect } from "react-redux";
const IOS_CLIENT_ID =
  "421984500214-2v08hjd6s9budpcfdhpblt7dfae90thu.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "421984500214-mas44cslkk85en2g7vvo9qeo20gtoloh.apps.googleusercontent.com";

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch({ type: "SetUser", user }),
  };
}

const Login = (props) => {
  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const verifyUser = await ajax.verifyUser(result.user.email);
        if (verifyUser.status) {
          props.setUser(verifyUser.body);
          props.navigation.navigate("Main", { user: verifyUser.body });
        } else {
          const createUser = await ajax.addUser(
            result.user.email,
            null,
            result.user.name,
            result.user.familyName,
            null,
            null,
            null
          );
          if (createUser.status) {
            setUser(createUser.body);
            props.navigation.navigate("Main", { user: verifyUser.body });
          }
        }
        // console.log("LoginScreen.js.js 21 | ", result);
        // result.accessToken;
      } else {
        alert("GG");
      }
    } catch (e) {
      console.log("LoginScreen.js.js 30 | Error with login", e);
    }
  };
  const verifyLogin = async (email, password) => {
    const response = await ajax.loginUser(email, password);
    alert(response.message);
    if (response.status) props.navigation.navigate("Main");
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

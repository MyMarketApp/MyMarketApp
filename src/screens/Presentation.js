import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "react-native-button";

const Presentation = (props) => {
  return (
    <View style={styles.Presentation}>
      <View style={styles.Description}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../assets/Flash.png")}
        />
        <Text style={styles.Title}>Don Lucho x San Pedro</Text>
        <Text style={{ color: "white" }}>Tus tiendas preferidas</Text>
        <Text style={{ color: "white" }}>mas cerca de ti</Text>
      </View>
      <View style={styles.Buttons}>
        <Button
          style={styles.Button}
          onPress={() => props.navigation.navigate("Register")}
        >
          REGISTRARME
        </Button>
        <Button
          style={styles.Button}
          onPress={() => props.navigation.navigate("Login")}
        >
          YA TENGO CUENTA
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Presentation: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#3F51B5",
    alignItems: "center",
  },
  Description: {
    justifyContent: "center",
    flex: 0.6,
    alignItems: "center",
  },
  Title: {
    fontSize: 24,
    color: "white",
  },
  Buttons: {
    justifyContent: "space-evenly",
    flex: 0.4,
    // backgroundColor: "blue",
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    textAlignVertical: "center",
    textAlign: "center",
    color: "green",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    height: 60,
    width: 250,
  },
});

export default Presentation;

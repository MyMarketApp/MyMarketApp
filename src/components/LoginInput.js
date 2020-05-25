import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Button from "react-native-button";

const LoginInput = (props) => {
  const [password, Password] = useState("");
  const [email, Email] = useState("");

  const getEmail = (email) => {
    Email(email);
  };
  const getPassword = (password) => {
    Password(password);
  };

  return (
    <View style={styles.Input}>
      <View style={styles.InputRow}>
        {/* <Ionicons style={styles.Icon} name="md-mail" size={20} color="#000" /> */}
        <TextInput
          style={styles.button}
          placeholder="Correo Electronico"
          onChangeText={getEmail}
          value={email}
        />
      </View>
      <View style={styles.InputRow}>
        {/* <Entypo style={styles.Icon} name="lock" size={24} color="black" /> */}
        <TextInput
          style={styles.button}
          placeholder="Contraseña"
          onChangeText={getPassword}
          value={password}
        />
      </View>
      <Button
        style={styles.Button}
        onPress={props.onLogin.bind(this, email, password)}
      >
        INGRESAR
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingLeft: 25,
    color: "white",
    borderRadius: 10,
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
  Icon: {
    paddingTop: 0,
    paddingLeft: 20,
  },
  InputRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 360,
  },
  Input: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    flex: 0.5,
    backgroundColor: "blue",
    alignItems: "center",
  },
});

export default LoginInput;

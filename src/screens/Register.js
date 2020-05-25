import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import ajax from "../services/Routes";
import Button from "react-native-button";

const Register = (props) => {
  const [email, Email] = useState("");
  const [password, Password] = useState("");
  const [name, Name] = useState("");
  const [lastName, LastName] = useState("");
  const [phone, Phone] = useState("");

  const register = async () => {
    const response = await ajax.addUser(email, password, name, lastName, phone);
    if (response.status && response.body) {
      alert(response.message);
      props.navigation.navigate("Login");
    } else alert("GG");
  };

  return (
    <View style={styles.Register}>
      <View style={styles.InputRow}>
        {/* <Ionicons style={styles.Icon} name="md-mail" size={20} color="#000" /> */}
        <TextInput
          style={styles.button}
          placeholder="Nombre"
          onChangeText={(name) => Name(name)}
          value={name}
        />
      </View>
      <View style={styles.InputRow}>
        {/* <Entypo style={styles.Icon} name="lock" size={24} color="black" /> */}
        <TextInput
          style={styles.button}
          placeholder="Apellidos"
          onChangeText={(lastName) => LastName(lastName)}
          value={lastName}
        />
      </View>
      <View style={styles.InputRow}>
        {/* <Ionicons style={styles.Icon} name="md-mail" size={20} color="#000" /> */}
        <TextInput
          style={styles.button}
          placeholder="Correo Electronico"
          onChangeText={(email) => Email(email)}
          value={email}
        />
      </View>
      <View style={styles.InputRow}>
        {/* <Ionicons style={styles.Icon} name="md-mail" size={20} color="#000" /> */}
        <TextInput
          style={styles.button}
          placeholder="Celular"
          onChangeText={(phone) => Phone(phone)}
          value={phone}
        />
      </View>
      <View style={styles.InputRow}>
        {/* <Ionicons style={styles.Icon} name="md-mail" size={20} color="#000" /> */}
        <TextInput
          style={styles.button}
          placeholder="Contraseña"
          onChangeText={(password) => Password(password)}
          value={password}
        />
      </View>
      <View style={styles.InputRow}>
        <Button style={styles.Button} onPress={register}>
          REGISTRARME
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Register: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
  },
  InputRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 360,
  },
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
});

export default Register;

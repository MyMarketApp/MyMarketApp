import React, { useState, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { connect } from "react-redux";
import ajax from "../../services/Routes";
import Button from "react-native-button";

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

const Profile = (props) => {
  const { route } = props;
  const { navigation } = props;
  const { user } = props;
  const [email, Email] = useState(user.email);
  const [password, Password] = useState(user.password);
  const [name, Name] = useState(user.name);
  const [lastName, LastName] = useState(user.lastName);
  const [phone, Phone] = useState(user.phone);
  const [adress, Adress] = useState(user.adress);
  const [coordinates, Coordinates] = useState(null);

  useEffect(() => {
    console.log(user);
    if (route.params?.coordinates) {
      Coordinates(route.params?.coordinates);
    }
  }, [route.params?.coordinates]);

  const update = async () => {
    const response = await ajax.updateUser(
      email,
      password,
      name,
      lastName,
      phone,
      coordinates,
      adress
    );
    console.log(response);
    alert(response.message);
    if (response.status && response.body) {
      props.setUser(response.body);
    } else alert("GG");
  };

  const getCoordinate = () => {
    navigation.navigate("ProfileLocation", { coordinates: user.coordinates });
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
          editable={false}
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
          placeholder="Direccion"
          onChangeText={(adress) => Adress(adress)}
          value={adress}
        />
        <Button style={styles.DirecctionButton} onPress={getCoordinate}>
          MAP
        </Button>
      </View>
      <View style={styles.InputRow}>
        {/* <Ionicons style={styles.Icon} name="md-mail" size={20} color="#000" /> */}
        <TextInput
          style={styles.button}
          placeholder="Celular"
          onChangeText={(phone) => Phone(phone)}
          value={phone}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.InputRow}>
        {/* <Ionicons style={styles.Icon} name="md-mail" size={20} color="#000" /> */}
        <TextInput
          secureTextEntry={true}
          style={styles.button}
          placeholder="Contraseña"
          onChangeText={(password) => Password(password)}
          value={password}
        />
      </View>
      <View style={styles.InputRow}>
        <Button style={styles.Button} onPress={update}>
          ACTUALIZAR
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Register: {
    flex: 1,
    backgroundColor: "#3F51B5",
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
  DirecctionButton: {
    backgroundColor: "#fff",
    textAlignVertical: "center",
    color: "green",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 60,
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

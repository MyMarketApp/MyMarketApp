import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Button from "react-native-button";

const RegisterLocation = ({ props, route, navigation }) => {
  const [posIni, PosIni] = useState({
    latitude: -12.0235422,
    longitude: -77.0855561,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const [markerIni, MarkerIni] = useState({
    latitude: -12.0235422,
    longitude: -77.0855561,
  });

  useEffect(() => {
    async function getLocation() {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
      } else {
        let location = await Location.getCurrentPositionAsync({});
        MarkerIni({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        PosIni({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      }
    }
    getLocation();
  }, []);

  const ready = () => {
    navigation.navigate("Register", {
      coordinates: markerIni,
    });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={posIni}>
        <Marker
          draggable
          coordinate={markerIni}
          onDragEnd={(e) => MarkerIni(e.nativeEvent.coordinate)}
          title={"Casa"}
          description={"Mantener presionado para mover"}
          image={require("../../assets/PinHouse.png")}
        />
      </MapView>
      <View style={styles.footer}>
        <Button style={styles.Button} onPress={ready}>
          LISTO
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mapStyle: {
    flex: 0.9,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  footer: {
    flex: 0.05,
    justifyContent: "center",
  },
  Button: {
    width: 100,
    height: "90%",
    justifyContent: "center",
    textAlignVertical: "center",
    borderColor: "green",
    borderWidth: 1,
    color: "green",
    borderRadius: 10,
    fontSize: 20,
  },
});

export default RegisterLocation;

import React, { useState } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const StoresLocation = ({ props, route, navigation }) => {
  const { stores } = route.params;
  const { store } = route.params;
  const [posIni, PosIni] = useState({
    latitude: store.coordinate.latitude,
    longitude: store.coordinate.longitude,
    latitudeDelta: 0.095,
    longitudeDelta: 0.045,
  });
  // const [markerIni, MarkerIni] = useState({
  //   latitude: parseFloat(store.latitude),
  //   longitude: parseFloat(store.longitude),
  // });
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={posIni}>
        {stores.map((s, i) => (
          <Marker
            key={s.id}
            coordinate={{
              latitude: s.coordinate.latitude,
              longitude: s.coordinate.longitude,
            }}
            title={s.name}
            description={s.direction}
            image={require("../../assets/PinMarket.png")}
          />
        ))}
        {/* <Marker
          draggable
          coordinate={markerIni}
          onDragEnd={(e) => MarkerIni(e.nativeEvent.coordinate)}
          title={store.name}
          description={store.direction}
          image={require("../../assets/PinMarket.png")}
        /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default StoresLocation;

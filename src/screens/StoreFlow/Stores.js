import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Title,
} from "react-native";

import Button from "react-native-button";
import ajax from "../../services/Routes";
import { Header, Body, Right, Icon, Left } from "native-base";

const Stores = (props) => {
  const [stores, Stores] = useState([]);
  useEffect(() => {
    async function retrieveStores() {
      const response = await ajax.allStores();
      await Stores(response.body);
    }
    retrieveStores();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Left>
          <Icon
            name="menu"
            onPress={() => props.navigation.openDrawer()}
          ></Icon>
        </Left>
        <Body>
          {/* <Title>Seminars</Title> */}
          <Text style={{ fontSize: 20, alignSelf: "center" }}>TIENDAS</Text>
        </Body>
        <Right>
          <Icon
            name="cart"
            onPress={() => props.navigation.navigate("MyOrders")}
          ></Icon>
        </Right>
      </Header>
      <View style={styles.Stores}>
        <ScrollView>
          {stores.map((s, i) => (
            <View style={styles.Store} key={s.id}>
              <TouchableOpacity onPress={() => console.log("buah")}>
                <Image style={styles.Image} source={{ uri: s.imageUrl }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, marginTop: 15 }}>{s.name}</Text>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("StoresLocation", {
                    stores: stores,
                    store: s,
                  })
                }
              >
                <Text style={{ color: "grey" }}>{s.direction}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Stores: {
    // marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Store: {
    marginTop: 50,
    flex: 1,
  },
  Image: {
    width: 350,
    height: 200,
    borderColor: "#dddddd",
    borderWidth: 1,
  },
});

export default Stores;

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
  FlatList,
} from "react-native";

import Button from "react-native-button";
import ajax from "../../services/Routes";
import { Header, Body, Right, Icon, Left } from "native-base";

const Stores = (props) => {
  const { store } = props.route.params;
  const [products, Products] = useState([]);
  useEffect(() => {
    async function retrieveProducts() {
      const response = await ajax.storeProducts(store.id);
      Products(response.body);
    }
    retrieveProducts();
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
          <Text style={{ fontSize: 20, alignSelf: "center" }}>
            {store.name}
          </Text>
        </Body>
        <Right>
          <Icon
            name="cart"
            onPress={() => props.navigation.navigate("MyOrders")}
          ></Icon>
        </Right>
      </Header>
      <View style={styles.Stores}>
        {/* <ScrollView> */}
        <FlatList
          data={products}
          horizontal={false}
          numColumns="2"
          renderItem={({ item }) => (
            <View
              style={{ width: "50%", alignItems: "center", marginBottom: 20 }}
            >
              <View>
                <TouchableOpacity onPress={() => console.log("buah")}>
                  <Image style={styles.Image} source={{ uri: item.imageUrl }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginTop: 15 }}>{item.name}</Text>
                <Text style={{ color: "grey" }}>{item.description}</Text>
                <Text style={{ color: "black", fontSize: 20 }}>
                  S/.{item.price}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Stores: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Store: {
    marginTop: 50,
    flex: 1,
  },
  Image: {
    width: 150,
    height: 100,
    borderColor: "#dddddd",
    borderWidth: 1,
  },
});

export default Stores;

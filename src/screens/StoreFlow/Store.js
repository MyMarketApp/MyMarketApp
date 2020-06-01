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
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../components/Redux";

const Stores = (props) => {
  const { count } = props;
  const { user } = props;
  const { store } = props.route.params;
  const [products, Products] = useState([]);
  useEffect(() => {
    async function retrieveProducts() {
      const response = await ajax.storeProducts(store.id);
      Products(response.body);
    }
    retrieveProducts();
  }, []);

  const addProduct = async (idProduct) => {
    const response = await ajax.addOrder(1, store.id, idProduct, 1, user.id);
    alert(response.message);
    if (response.status) props.addToCart();
  };

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
          <View
            style={{
              position: "relative",
              height: 25,
              width: 25,
              borderRadius: 15,
              backgroundColor: "rgba(95,197,123,0.8)",
              right: 0,
              botton: 0,
              top: 0,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>{count}</Text>
          </View>
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
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "black", fontSize: 20 }}>
                    S/.{item.price}
                  </Text>
                  <Icon
                    name="add-circle"
                    onPress={() => addProduct(item.id)}
                  ></Icon>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stores);

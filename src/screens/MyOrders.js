import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  Container,
  Content,
  Header,
  Body,
  Right,
  Icon,
  Left,
} from "native-base";
import Button from "react-native-button";
import ajax from "../services/Routes";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../components/Redux";

const MyOrders = (props) => {
  const [subTotal, SubTotal] = useState(0);
  const { orders } = props.user;
  useEffect(() => {
    orders.forEach((element) => {
      SubTotal(
        (subTotal) => subTotal + element.quantity * element.product.price
      );
    });
  }, []);
  const remove = async (index) => {
    const response = await ajax.deleteOrder(orders[index].id);
    alert(response.message);
    if (response.status) {
      props.removeFromCart();
      SubTotal(
        (subTotal) =>
          subTotal - orders[index].quantity * orders[index].product.price
      );
      orders.splice(index, 1);
    }
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
          <Text style={{ fontSize: 20, alignSelf: "center" }}>Mi Carrito</Text>
        </Body>
        <Right></Right>
      </Header>
      <View style={styles.MyOrders}>
        <FlatList
          data={orders}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                // alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View>
                <Image
                  style={styles.Image}
                  source={{ uri: item.product.imageUrl }}
                />
              </View>
              <View>
                <Text style={{ fontSize: 20, marginTop: 15 }}>
                  {item.product.name}
                </Text>
                <Text style={{ color: "grey" }}>
                  {item.product.description}
                </Text>
                <Text style={{ fontSize: 20 }}>{item.quantity}</Text>
              </View>
              <View
                style={{
                  justifyContent: "space-around",
                  alignItems: "flex-end",
                }}
              >
                <Text style={{ color: "black", fontSize: 20 }}>
                  S/.{item.product.price}
                </Text>
                <Icon name="close-circle" onPress={() => remove(index)}></Icon>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
        style={{
          flex: 0.3,
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 24 }}>SubTotal</Text>
          <Text style={{ fontSize: 24 }}>S/.{subTotal}</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 24 }}>Delivery</Text>
          <Text style={{ fontSize: 24 }}>S/.2.00</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 24 }}>Total</Text>
          <Text style={{ fontSize: 24 }}>S/.{subTotal + 2.0}</Text>
        </View>
        <Button
          style={styles.Button}
          // onPress={() => props.navigation.navigate("Login")}
        >
          PAGAR
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MyOrders: {
    flex: 0.7,
  },
  Image: {
    width: 100,
    height: 100,
    borderColor: "#dddddd",
    borderWidth: 1,
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
    width: 330,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);

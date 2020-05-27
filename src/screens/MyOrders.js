import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Container, Content, Header, Body, Icon, Left } from "native-base";
import Button from "react-native-button";
import ajax from "../services/Routes";

const MyOrders = (props) => {
  return (
    <View style={styles.MyOrders}>
      <Text>MyOrders</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MyOrders: {
    // marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyOrders;

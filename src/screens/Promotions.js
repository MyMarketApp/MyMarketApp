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
import Button from "react-native-button";
import ajax from "../services/Routes";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../components/Redux";

const Promotions = (props) => {
  const { orders } = props;
  useEffect(() => {
    console.log("Promotions");
  }, []);
  return (
    <View style={styles.Promotions}>
      <Text>Promociones</Text>
      <Text>{props.user.name}</Text>
      <Text>{orders.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Promotions: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Promotions);

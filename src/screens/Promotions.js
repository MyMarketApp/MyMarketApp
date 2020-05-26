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

const Promotions = (props) => {
  return (
    <View style={styles.Promotions}>
      <Text>Promotions</Text>
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

export default Promotions;

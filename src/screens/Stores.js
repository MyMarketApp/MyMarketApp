import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "react-native-button";

const Stores = (props) => {
  return (
    <View style={styles.Stores}>
      <Text>STORES</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Stores: {
    backgroundColor: "blue",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Stores;

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

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch({ type: "SetUser", user }),
  };
}

const Promotions = (props) => {
  useEffect(() => {}, []);
  return (
    <View style={styles.Promotions}>
      <Text>Promociones</Text>
      <Text>{props.user.name}</Text>
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

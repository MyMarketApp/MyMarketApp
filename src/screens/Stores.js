import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import Button from "react-native-button";
import ajax from "../services/Routes";

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
    <View style={styles.Stores}>
      <ScrollView>
        {stores.map((s, i) => (
          <View>
            <Image
              style={{ width: 300, height: 200 }}
              source={{ uri: s.imageUrl }}
            />
            <Text>{s.name}</Text>
            <Text>{s.direction}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Stores: {
    backgroundColor: "blue",
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Stores;

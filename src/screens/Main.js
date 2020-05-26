import * as React from "react";
import { Button, View } from "react-native";
import Stores from "./Stores";
import StoresLocation from "./StoresLocation";
import Profile from "./Profile";
import MyOrders from "./MyOrders";
import ContactUs from "./ContactUs";
import Promotions from "./Promotions";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function Main() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Stores">
        <Drawer.Screen name="Stores" component={Stores} />
        <Drawer.Screen name="StoresLocation" component={StoresLocation} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="MyOrders" component={MyOrders} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Promotions" component={Promotions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Main;

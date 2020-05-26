import * as React from "react";
import { Button, View } from "react-native";
import Stores from "./StoreFlow/Stores";
import StoresLocation from "./StoreFlow/StoresLocation";
import Profile from "./Profile";
import MyOrders from "./MyOrders";
import ContactUs from "./ContactUs";
import Promotions from "./Promotions";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StoreFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stores"
        component={Stores}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StoresLocation"
        component={StoresLocation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Main() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="StoreFlow">
        <Drawer.Screen name="StoreFlow" component={StoreFlow} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="MyOrders" component={MyOrders} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Promotions" component={Promotions} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Main;

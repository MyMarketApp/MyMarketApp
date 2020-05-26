import * as React from "react";
import { Button, View } from "react-native";
import Stores from "./StoreFlow/Stores";
import StoresLocation from "./StoreFlow/StoresLocation";
import Profile from "./ProfileFlow/Profile";
import ProfileLocation from "./ProfileFlow/ProfileLocation";
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

function ProfileFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileLocation"
        component={ProfileLocation}
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
        <Drawer.Screen
          name="ProfileFlow"
          component={ProfileFlow}
          options={{
            title: "Mi cuenta",
          }}
        />
        <Drawer.Screen
          name="Promotions"
          component={Promotions}
          options={{
            title: "Promociones",
          }}
        />
        <Drawer.Screen
          name="StoreFlow"
          component={StoreFlow}
          options={{
            title: "Tiendas",
          }}
        />
        <Drawer.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            title: "Mis Pedidos",
          }}
        />
        <Drawer.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: "Contactano",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Main;

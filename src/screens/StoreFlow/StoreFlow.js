import React from "react";
import Stores from "./Stores";
import StoresLocation from "./StoresLocation";
import Store from "./Store";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

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
      <Stack.Screen
        name="Store"
        component={Store}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StoreFlow;

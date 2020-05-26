import React from "react";
import { Text, View } from "react-native";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Presentation from "./src/screens/Presentation";

import RegisterLocation from "./src/screens/RegisterLocation";
import Main from "./src/screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Presentation"
          component={Presentation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterLocation"
          component={RegisterLocation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Crear Cuenta",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

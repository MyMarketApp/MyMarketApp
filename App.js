import React from "react";
import { Text, View } from "react-native";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Presentation from "./src/screens/Presentation";
import Stores from "./src/screens/Stores";
import StoresLocation from "./src/screens/StoresLocation";
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
          name="Register"
          component={Register}
          options={{
            title: "Crear Cuenta",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Stores"
          component={Stores}
          options={{
            headerShown: false,
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
          name="StoresLocation"
          component={StoresLocation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

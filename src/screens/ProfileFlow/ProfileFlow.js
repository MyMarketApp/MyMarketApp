import React, { useEffect } from "react";
import Profile from "./Profile";
import ProfileLocation from "./ProfileLocation";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const ProfileFlow = (props) => {
  useEffect(() => {
    // console.log("profileFlow");
    // console.log(props);
  }, []);
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
};

export default ProfileFlow;

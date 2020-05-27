import React, { useEffect } from "react";
import { Button, View, Text, Image } from "react-native";
import Stores from "./StoreFlow/Stores";
import StoresLocation from "./StoreFlow/StoresLocation";
import Profile from "./ProfileFlow/Profile";
import ProfileLocation from "./ProfileFlow/ProfileLocation";
import MyOrders from "./MyOrders";
import ContactUs from "./ContactUs";
import Promotions from "./Promotions";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container, Content, Header, Body, Icon } from "native-base";
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

const Main = ({ props, route }) => {
  const { user } = route.params;
  useEffect(() => {
    console.log("buah props");
    console.log(user);
  }, []);
  const CustomMainDrawerContent = (props) => {
    useEffect(() => {
      console.log("state user");
      console.log(props.user);
    }, []);
    return (
      <Container>
        <Header style={{ justifyContent: "center" }}>
          <Body>
            <View
              style={{
                flexDirection: "row",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../../assets/Icons/User.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text
                style={{
                  paddingTop: 8,
                  fontSize: 20,
                  overflow: "hidden",
                }}
              >
                {user.name.length < 14
                  ? `${user.name}`
                  : `${user.name.substring(0, 14)}...`}
              </Text>
            </View>
          </Body>
        </Header>
        <Content>
          <DrawerItemList {...props}></DrawerItemList>
        </Content>
      </Container>
    );
  };
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="StoreFlow"
        drawerContent={(props) => <CustomMainDrawerContent {...props} />}
        drawerStyle={
          {
            // backgroundColor: "blue",
          }
        }
      >
        <Drawer.Screen
          name="ProfileFlow"
          component={ProfileFlow}
          options={{
            title: "Mi cuenta",
            drawerIcon: () => (
              <Image
                source={require("../../assets/Icons/Profile.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Promotions"
          component={Promotions}
          options={{
            title: "Promociones",
            drawerIcon: () => (
              <Image
                source={require("../../assets/Icons/Promotions.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="StoreFlow"
          component={StoreFlow}
          options={{
            title: "Tiendas",
            drawerIcon: () => (
              <Image
                source={require("../../assets/Icons/Stores.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            title: "Mis Pedidos",
            drawerIcon: () => (
              <Image
                source={require("../../assets/Icons/MyOrders.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            title: "Contactanos",
            drawerIcon: () => (
              <Image
                source={require("../../assets/Icons/ContactUs.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;

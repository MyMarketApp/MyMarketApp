import React, { useEffect } from "react";
import { Image } from "react-native";
import MainSidebar from "../components/MainSidebar";
import ProfileFlow from "./ProfileFlow/ProfileFlow";
import StoreFlow from "./StoreFlow/StoreFlow";
import MyOrders from "./MyOrders";
import ContactUs from "./ContactUs";
import Promotions from "./Promotions";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStore } from "redux";
import { Provider } from "react-redux";

const Drawer = createDrawerNavigator();

const Main = (props) => {
  const { user } = props.route.params;
  const { orders } = user;
  const initialState = {
    user: user,
    count: orders.length,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SetUser":
        return {
          ...state,
          user: action.user,
        };
      case "addToCart":
        return {
          ...state,
          count: state.count + 1,
        };
      case "removeFromCart":
        return {
          ...state,
          count: state.count - 1,
        };
    }
    return state;
  };

  const store = createStore(reducer);

  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          initialRouteName="StoreFlow"
          drawerContent={(props) => <MainSidebar {...props} />}
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
    </Provider>
  );
};

export default Main;

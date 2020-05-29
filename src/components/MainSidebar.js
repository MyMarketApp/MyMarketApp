import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";
import { Container, Content, Header, Body, Icon } from "native-base";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const MainSidebar = (props) => {
  const { user } = props;
  useEffect(() => {
    //    console.log("MainSidebar");
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

export default connect(mapStateToProps)(MainSidebar);

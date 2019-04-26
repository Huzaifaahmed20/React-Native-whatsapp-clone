import React from "react";
import { View } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import VerifyScreen from "../screens/Verify/VerifyScreen";
import IconButton from "../components/IconButtom";
import ConfirmScreen from "../screens/Confirm/ConfirmScreen";

const WelcomeStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Verify: {
      screen: VerifyScreen,
      navigationOptions: ({}) => {
        return {
          title: "Verify your phone number",
          headerLeft: <View style={{ padding: 6 }} />, //add this
          headerTitleStyle: {
            color: "#12887d",
            textAlign: "center",
            flexGrow: 1,
            alignSelf: "center"
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
          },
          headerRight: (
            <IconButton
              iconButtonStyle={{ paddingRight: 20 }}
              iconName="ellipsis-v"
              iconSize={25}
              iconColor="#747474"
            />
          )
        };
      }
    },

    Confirm: {
      screen: ConfirmScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: `Verify +92 ${navigation.getParam("phoneNumber")}`,
          headerLeft: <View style={{ padding: 6 }} />,
          headerTitleStyle: {
            color: "#12887d",
            textAlign: "center",
            flexGrow: 1,
            alignSelf: "center"
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0
          },
          headerRight: (
            <IconButton
              iconButtonStyle={{ paddingRight: 20 }}
              iconName="ellipsis-v"
              iconSize={25}
              iconColor="#747474"
            />
          )
        };
      }
    }
  },
  {
    // initialRouteName: "Confirm"
  }
);

const root = createSwitchNavigator(
  {
    WelcomeStack
  },
  {
    initialRouteName: "WelcomeStack"
  }
);

export default createAppContainer(WelcomeStack);

import React from "react";
import { View, Text } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import VerifyScreen from "../screens/Verify/VerifyScreen";
import IconButton from "../components/IconButtom";
import ConfirmScreen from "../screens/Confirm/ConfirmScreen";
import ChatScreen from "../screens/Chats/ChatScreen";
import StatusScreen from "../screens/Status/StatusScreen";
import CallsScreens from "../screens/Calls/CallsScreen";

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
            fontSize: 15,
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

const FeaturesTab = createMaterialTopTabNavigator(
  {
    // Camera: {
    //   screen: ChatScreen,
    //   navigationOptions: () => ({
    //     tabBarLabel: 'Home',
    //     tabBarIcon: ({ tintColor }) => (
    //       <IconButton iconName="camera" iconSize={25} iconColor="#ffffff" />
    //     )
    //   })
    // },
    Chat: {
      screen: ChatScreen
    },
    Status: {
      screen: StatusScreen
    },
    Calls: {
      screen: CallsScreens
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#005f56"
      },
      indicatorStyle: {
        backgroundColor: "#ffffff",
        height: 5
      }
    }
  }
);

const HomeStack = createStackNavigator({
  Home: {
    screen: FeaturesTab,
    navigationOptions: ({}) => {
      return {
        headerLeft: (
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "bold",
              marginHorizontal: 20
            }}
          >
            WhatsApp
          </Text>
        ),
        headerStyle: {
          backgroundColor: "#005f56",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        headerRight: (
          <View style={{ flexDirection: "row", paddingHorizontal: 30 }}>
            <IconButton
              iconButtonStyle={{ marginHorizontal: 30 }}
              iconName="search"
              iconSize={25}
              iconColor="#ffffff"
            />
            <IconButton
              iconName="ellipsis-v"
              iconSize={25}
              iconColor="#ffffff"
            />
          </View>
        )
      };
    }
  }
});

const root = createSwitchNavigator(
  {
    WelcomeStack,
    HomeStack
  },
  {
    initialRouteName: "HomeStack"
  }
);

export default createAppContainer(root);

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
import IconButton from "../components/IconButton";
import ConfirmScreen from "../screens/Confirm/ConfirmScreen";
import ChatScreen from "../screens/Chats/ChatScreen";
import StatusScreen from "../screens/Status/StatusScreen";
import CallsScreens from "../screens/Calls/CallsScreen";
import CameraScreen from "../screens/Camera/CmaeraScreen";
import Icon from "react-native-vector-icons/FontAwesome5";

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
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={{ marginTop: 25 }}>
            <Icon name="camera" size={22} color={tintColor} />
          </View>
        )
      }
    },
    Chats: {
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
      tabStyle: {
        paddingTop: -30,
      },
      showIcon: true,

      labelStyle: {
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "bold"
      },
      style: {
        backgroundColor: "#005f56"
      },
      indicatorStyle: {
        backgroundColor: "#ffffff",
        height: 3,
        borderRadius: 5
      }
    },
    initialRouteName: "Camera"
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
          <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
            <IconButton
              iconButtonStyle={{ marginHorizontal: 30 }}
              iconName="search"
              iconSize={20}
              iconColor="#ffffff"
            />
            <IconButton
              iconName="ellipsis-v"
              iconSize={20}
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

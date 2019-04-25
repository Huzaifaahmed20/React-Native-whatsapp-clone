import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import WelcomeScreenStyle from "./WelcomeScreenStyle";
import CustomButton from "../../components/CustomButton";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={WelcomeScreenStyle.container}>
        <Image
          style={WelcomeScreenStyle.logoStyle}
          source={require("../../assets/logo.png")}
        />
        <Text style={WelcomeScreenStyle.welcomeText}>Welcome to WhatsApp</Text>
        <Text style={WelcomeScreenStyle.tapStyle}>
          Tap "Agree and Continue" to accept the
        </Text>
        <Text style={WelcomeScreenStyle.linkStyle}>
          Whatsapp terms of sevice and policy
        </Text>
        <View style={WelcomeScreenStyle.buttonView}>
          <CustomButton
            onPress={() => this.props.navigation.navigate("Verify")}
            buttonText="Agree and Continue"
          />
        </View>
      </View>
    );
  }
}

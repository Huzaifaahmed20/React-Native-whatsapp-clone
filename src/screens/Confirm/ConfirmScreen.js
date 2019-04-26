import React, { Component } from "react";
import { Text, View } from "react-native";
import ConfirmScreenStyle from "./ConfirmScreenStyle";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomButton from "../../components/CustomButton";

export default class ConfirmScreen extends Component {
  goToNext = () => {
    this.props.navigation.navigate("Chats")
  };
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text style={ConfirmScreenStyle.confirmTextStyle}>
          We have sent an SMS with a Code to
        </Text>
        <View style={ConfirmScreenStyle.numberView}>
          <Text style={ConfirmScreenStyle.numberStyle}>
            +92 {navigation.getParam("phoneNumber")}
          </Text>
          <Text style={ConfirmScreenStyle.wrongNumberStyle}>Wrong Number?</Text>
        </View>
        <TextInput
          keyboardType="phone-pad"
          style={{ width: "50%", alignSelf: "center", paddingLeft: 35 }}
          underlineColorAndroid="#7e7e7e"
          placeholder="___ ___ ___     ___ ___ ___"
          placeholderTextColor="#bcbdbf"
        />
        <Text style={ConfirmScreenStyle.descStyle}>Enter 6-digit code</Text>
        <View style={ConfirmScreenStyle.mainView}>
          <View style={ConfirmScreenStyle.smsView}>
            <Icon
              style={ConfirmScreenStyle.iconStyle}
              name="comment-dots"
              size={25}
              color="#d5d5d5"
            />
            <Text style={ConfirmScreenStyle.resendTextStyle}>
              Resend SMS in 14 hours
            </Text>
          </View>
          <View style={ConfirmScreenStyle.hrLine} />
          <View style={ConfirmScreenStyle.callView}>
            <Icon
              style={ConfirmScreenStyle.iconStyle}
              name="phone-volume"
              size={25}
              color="#d5d5d5"
            />
            <Text style={ConfirmScreenStyle.resendTextStyle}>Call Me</Text>
            <Text style={ConfirmScreenStyle.timerStyle}>1:02</Text>
          </View>
        </View>
        <View style={ConfirmScreenStyle.nextButtonView}>
          <CustomButton
            onPress={this.goToNext}
            buttonTextStyle={ConfirmScreenStyle.buttonTextStyle}
            customButtonStyle={ConfirmScreenStyle.nextButtonStyle}
            buttonText="Next"
          />
        </View>
      </View>
    );
  }
}

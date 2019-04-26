import React, { Component } from "react";
import { View, Text, Picker, TextInput, Alert } from "react-native";
import VerifyScreenStyle from "./VerifyScreenStyle";
import CountriesList from "../../lib/CountriesList";
import CustomButton from "../../components/CustomButton";

export default class VerifyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ""
    };
  }
  renderCountries = () => {
    return CountriesList.map(val => {
      return <Picker.Item key={val.code} label={val.name} value={val.code} />;
    });
  };
  goToNext = () => {
    const { phoneNumber } = this.state;
    if (this.state.phoneNumber === "") {
      Alert.alert("", "Please enter your phone number");
    } else {
      Alert.alert(
        "",
        `We will be verifying the phone number:\n\n +92 ${phoneNumber} \n\n Is this OK ow would you like to edit the number`,
        [
          {
            text: "Edit",
            onPress: () => console.log("Ask me later pressed")
          },
          {
            text: "OK",
            onPress: () =>
              this.props.navigation.navigate("Confirm", { phoneNumber })
          }
        ],
        { cancelable: true }
      );
    }
  };
  render() {
    return (
      <View>
        <Text style={VerifyScreenStyle.verifyTextStyle}>
          WhatsApp will send you an SMS message (carrier charges may apply) to
          verify your phone number. Enter your country code and phone number.
        </Text>
        <Picker
          selectedValue={this.state.language}
          style={VerifyScreenStyle.CountryPickerStyle}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          {this.renderCountries()}
        </Picker>
        <View style={VerifyScreenStyle.phoneNumberContainer}>
          <TextInput
            underlineColorAndroid="#000"
            placeholder="+92"
            placeholderTextColor="#000"
            editable={false}
            onChangeText={text => this.setState({ text })}
            style={VerifyScreenStyle.phoneCode}
          />
          <TextInput
            underlineColorAndroid="#000"
            keyboardType="phone-pad"
            placeholder="Phone Number"
            placeholderTextColor="#000"
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
            style={VerifyScreenStyle.phoneNumber}
          />
        </View>
        <View style={VerifyScreenStyle.nextButtonView}>
          <CustomButton
            onPress={this.goToNext}
            buttonTextStyle={VerifyScreenStyle.buttonTextStyle}
            customButtonStyle={VerifyScreenStyle.nextButtonStyle}
            buttonText="Next"
          />
        </View>
      </View>
    );
  }
}

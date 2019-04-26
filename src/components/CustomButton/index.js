import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const CustomButton = ({
  onPress,
  buttonTextStyle,
  customButtonStyle,
  buttonText
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={customButtonStyle}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomButton;

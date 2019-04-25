import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, customButtonStyle, buttonText }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonStyle, customButtonStyle]}
      >
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#323b40",
    paddingVertical: 10,
    paddingHorizontal: 100
    // width: "70%"
  },
  buttonTextStyle: {
    color: "#ffffff",
    textAlign: "center"
  }
});

export default CustomButton;

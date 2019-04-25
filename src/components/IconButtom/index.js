import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export default (IconButton = ({
  iconButtonStyle,
  onPress,
  iconName,
  iconSize,
  iconColor
}) => {
  return (
    <TouchableOpacity style={iconButtonStyle} onPress={onPress}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
});

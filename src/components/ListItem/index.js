import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import ListStyling from "./ListStyling";
import Icon from "react-native-vector-icons/FontAwesome5";

const checkStatus = {
  checkSeen: {
    name: "check-double",
    color: "#00afe6"
  },
  checkSent: {
    name: "check",
    color: "#00b79c"
  },
  checkDelivered: {
    name: "check-double",
    color: "#00b79c"
  }
};

export default class ListItem extends Component {
  render() {
    const {
      lastMessage,
      time,
      avatar,
      name,
      seen,
      delivered,
      sent
    } = this.props;
    const { checkSeen, checkSent, checkDelivered } = checkStatus;
    return (
      <View style={{ flex: 1 }}>
        <TouchableNativeFeedback>
          <View style={ListStyling.childCont}>
            <View style={ListStyling.ImageView}>
              <Image style={ListStyling.avatarStyle} source={avatar} />
            </View>
            <View style={ListStyling.nameAndLastMessage}>
              <Text style={ListStyling.nameStyle}>{name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name={
                    seen && sent && delivered
                      ? checkSeen.name
                      : sent && !seen && !delivered
                      ? checkSent.name
                      : sent && delivered && !seen
                      ? checkDelivered.name
                      : checkSent.name
                  }
                  size={15}
                  color={
                    seen && sent && delivered
                      ? checkSeen.color
                      : sent && !seen && !delivered
                      ? checkSent.color
                      : sent && delivered && !seen
                      ? checkDelivered.color
                      : checkSent.color
                  }
                />
                <Text
                  numberOfLines={1}
                  ellipsizeMode={"tail"}
                  style={ListStyling.lastMessageStyle}
                >
                  {lastMessage}
                </Text>
              </View>
            </View>
            <Text style={ListStyling.timeStyle}>{time}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

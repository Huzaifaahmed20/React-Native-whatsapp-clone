import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import ListStyling from "./ListStyling";

export default class ListItem extends Component {
  render() {
    const { lastMessage, time, avatar, name } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <TouchableNativeFeedback>
          <View style={ListStyling.childCont}>
            <Image style={ListStyling.avatarStyle} source={avatar} />
            <View style={ListStyling.nameAndLastMessage}>
              <Text style={ListStyling.nameStyle}>{name}</Text>
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={ListStyling.lastMessageStyle}
              >
                {lastMessage}
              </Text>
            </View>
            <Text style={ListStyling.timeStyle}>{time}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

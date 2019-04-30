import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import ChatScreenStyle from "./ChatScreenStyle";
import ChatData from "../../lib/ChatData";
import ListItem from "../../components/ListItem";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class ChatScreen extends Component {
  _renderItem = ({ item }) => (
    <ListItem
      seen={item.seen}
      delivered={item.delivered}
      sent={item.delivered}
      id={item.id}
      onPressItem={this._onPressItem}
      lastMessage={item.lastMessage}
      time={item.time}
      avatar={item.profileImage}
      name={item.name}
    />
  );
  // profileImage
  // name
  // time
  // lastMessage
  _keyExtractor = item => item.name;

  render() {
    return (
      <View style={ChatScreenStyle.main}>
        <FlatList
          data={ChatData}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            position: "absolute",
            bottom: 10,
            right: 10,
            height: 60,
            backgroundColor: "#00c859",
            borderRadius: 100
          }}
        >
          <Icon name="message" color="#ffffff" size={20} />
        </TouchableOpacity>
      </View>
    );
  }
}

import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import ChatScreenStyle from "./ChatScreenStyle";
import ChatData from "../../lib/ChatData";
import ListItem from "../../components/ListItem";

export default class ChatScreen extends Component {
  _renderItem = ({ item }) => (
    <ListItem id={item.id} onPressItem={this._onPressItem} lastMessage={item.lastMessage} time={item.time} avatar={item.profileImage} name={item.name} />
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
      </View>
    );
  }
}

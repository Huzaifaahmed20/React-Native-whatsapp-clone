import React, { Component } from "react";
import { View, FlatList } from "react-native";
import CallSCreenStyle from "./CallSCreenStyle";
import IconButton from "../../components/IconButton";
import StatusData from "../../lib/StatusData";
import CallsListItem from "../../components/CallsListItem";

export default class CallsScreen extends Component {
  _renderItem = ({ item }) => (
    <CallsListItem
      id={item.id}
      onPressItem={this._onPressItem}
      time={item.time}
      avatar={item.latestStatusImage}
      name={item.name}
    />
  );

  _keyExtractor = item => item.name;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={CallSCreenStyle.mainView}>
          <View>
            <FlatList
              data={StatusData}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        </View>
        <IconButton
          iconButtonStyle={CallSCreenStyle.floatingButton}
          iconColor="#ffffff"
          iconName="phone-plus"
          iconSize={20}
          materialCommunityIcon
        />
      </View>
    );
  }
}

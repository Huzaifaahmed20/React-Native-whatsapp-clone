import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableNativeFeedback,
  FlatList
} from "react-native";
import StatusScreenStyle from "./StatusScreenStyle";
import IconButton from "../../components/IconButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import StatusData from "../../lib/StatusData";
import StatusListItem from "../../components/StatusListItem";
import { ScrollView } from "react-native-gesture-handler";

export default class StatusScreen extends Component {
  _renderItem = ({ item }) => (
    <StatusListItem
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
      <View style={StatusScreenStyle.mainView}>
        <ScrollView>
          <View>
            <TouchableNativeFeedback>
              <View style={StatusScreenStyle.myStatusView}>
                <View style={StatusScreenStyle.statusImage}>
                  <View>
                    <Image
                      style={StatusScreenStyle.avatarStyle}
                      source={require("../../assets/avatar.png")}
                    />
                    <View style={StatusScreenStyle.smallIconStyle}>
                      <Icon color="#ffffff" name="plus" size={15} />
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 20,
                      fontWeight: "bold"
                    }}
                  >
                    My Status
                  </Text>
                  <Text>Tap to add status update</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
            <Text
              style={{ marginHorizontal: 10, marginVertical: 20, fontSize: 15 }}
            >
              Recent Updates
            </Text>
            <FlatList
              data={StatusData}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </View>
        </ScrollView>
        <IconButton
          iconButtonStyle={StatusScreenStyle.floatingButtonPen}
          iconColor="#487374"
          iconName="pen"
          iconSize={20}
        />

        <IconButton
          iconButtonStyle={StatusScreenStyle.floatingButtonCamera}
          iconColor="#ffffff"
          iconName="camera"
          iconSize={20}
        />
      </View>
    );
  }
}

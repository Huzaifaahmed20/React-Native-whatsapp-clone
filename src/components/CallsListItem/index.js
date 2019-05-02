import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet
} from "react-native";
import IconButton from "../IconButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class CallsListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { avatar, time, name } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 5,
          backgroundColor: "#fafafa"
        }}
      >
        <TouchableNativeFeedback>
          <View style={styles.childCont}>
            <View style={styles.ImageView}>
              <Image style={styles.avatarStyle} source={avatar} />
            </View>
            <View>
              <Text style={styles.nameStyle}>{name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  style={{ marginTop: 3 }}
                  name="arrow-bottom-left"
                  color="red"
                  size={15}
                />
                <Text style={styles.timeStyle}>Today {time}</Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
        <IconButton
          iconButtonStyle={{ marginTop: 25, marginRight: 20 }}
          iconName="phone"
          iconColor="#5abcb0"
          iconSize={25}
          materialCommunityIcon
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  childCont: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fafafa"
  },
  ImageView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 10
  },
  avatarStyle: {
    height: 60,
    width: 60,
    borderRadius: 50
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 17
  },
  timeStyle: {
    fontSize: 15,
    color: "#8d8d8d",
    marginHorizontal: 8,
  },
  lastMessageStyle: {
    marginHorizontal: 2,
    fontSize: 15
  }
});

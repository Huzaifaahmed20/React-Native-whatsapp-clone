import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from "react-native";
export default class StatusListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { avatar, time, name } = this.props;
    return (
      <View>
        <TouchableNativeFeedback>
          <View style={styles.childCont}>
            <View style={styles.ImageView}>
              <Image style={styles.avatarStyle} source={avatar} />
            </View>
            <View>
              <Text style={styles.nameStyle}>{name}</Text>
              <Text style={styles.timeStyle}>Today {time}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
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
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "#000000",
    borderWidth: 1,
    marginHorizontal: 10
  },
  avatarStyle: {
    height: 53,
    width: 53,
    borderRadius: 50
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 17
  },
  timeStyle: {
    fontSize: 15,
    color: "#8d8d8d"
  },
  lastMessageStyle: {
    marginHorizontal: 2,
    fontSize: 15
  }
});

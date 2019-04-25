import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./src/routes";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

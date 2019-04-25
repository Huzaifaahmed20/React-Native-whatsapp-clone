import React, { Component } from "react";
import { Text, View } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-enhanced-popup-menu";

export default class CustomPopupMenu extends Component {
  render() {
    let textRef = React.createRef();
    let menuRef = null;

    const setMenuRef = ref => (menuRef = ref);
    const hideMenu = () => menuRef.hide();
    const showMenu = () =>
      menuRef.show(textRef.current, (stickTo = Position.BOTTOM_CENTER));

    const onPress = () => showMenu();
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <Text ref={textRef} style={{ fontSize: 20, textAlign: "center" }}>
          Text component
        </Text>

        <Button title="Show menu" onPress={onPress} />

        <Menu ref={setMenuRef}>
          <MenuItem onPress={hideMenu}>Item 1</MenuItem>
          <MenuItem onPress={hideMenu}>Item 2</MenuItem>
          <MenuItem onPress={hideMenu} disabled>
            Item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Item 4</MenuItem>
        </Menu>
      </View>
    );
  }
}

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  childCont: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  avatarStyle: {
    height: 70,
    width: 70
  },
  nameAndLastMessage: {
    justifyContent: "center",
    paddingHorizontal: 10
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 22
  },
  timeStyle: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  lastMessageStyle: {
    fontSize: 20
  }
});

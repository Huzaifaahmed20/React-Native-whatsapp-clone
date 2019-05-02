import { StyleSheet } from "react-native";

export default StyleSheet.create({
  childCont: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
  },
  ImageView: {
    backgroundColor: "#ffffff",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "#88A8C5"
  },
  avatarStyle: {
    height: 55,
    width: 55,
    borderRadius: 50
  },
  nameAndLastMessage: {
    justifyContent: "center",
    paddingHorizontal: 20
  },
  nameStyle: {
    fontWeight: "bold",
    fontSize: 17
  },
  timeStyle: {
    marginVertical: 15
  },
  lastMessageStyle: {
    marginHorizontal: 2,
    fontSize: 15
  }
});

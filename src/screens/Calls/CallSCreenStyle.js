import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    backgroundColor: "#f4f4f4",
    flex: 1
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: "#00c859",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 60,
    backgroundColor: "#00c859",
    borderRadius: 100,
    shadowColor: "rgba(46, 229, 157, 0.4)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 }
  }
});

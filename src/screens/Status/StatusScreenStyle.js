import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainView: {
    backgroundColor: "#f4f4f4",
    flex: 1
  },
  myStatusView: {
    width: "100%",
    height: 80,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center"
  },
  statusImage: {
    backgroundColor: "#cccccc",
    height: 60,
    width: 60,
    borderRadius: 100,
    marginHorizontal: 20
  },
  avatarStyle: {
    height: 60,
    width: 60
  },
  smallIconStyle: {
    justifyContent: "center",
    alignItems: "center",
    left: 45,
    bottom: 20,
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: "#00c859"
  },
  floatingButtonPen: {
    borderWidth: 1,
    borderColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 90,
    right: 14,
    width: 50,
    height: 50,
    backgroundColor: "#eaf5f7",
    borderRadius: 100,
    shadowColor: "rgba(46, 229, 157, 0.4)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 }
  },
  floatingButtonCamera: {
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

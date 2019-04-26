import { StyleSheet } from "react-native";

export default StyleSheet.create({
  numberView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  numberStyle: {
    fontWeight: "bold",
    color: "#747474",
    marginRight: 5
  },
  wrongNumberStyle: {
    fontWeight: "bold",
    marginLeft: 5,
    color: "#13afc6"
  },
  confirmTextStyle: {
    fontWeight: "bold",
    color: "#747474",
    textAlign: "center"
  },
  descStyle: {
    color: "#7e7e7e",
    textAlign: "center",
    fontSize: 17
  },
  mainView: {
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 30
  },
  smsView: {
    marginVertical: 20,
    flexDirection: "row"
  },
  callView: {
    marginVertical: 20,
    flexDirection: "row"
  },
  iconStyle: {
    marginHorizontal: 30
  },
  resendTextStyle: {
    fontSize: 15,
    color: "#7e7e7e"
  },
  timerStyle: {
    fontSize: 15,
    color: "#7e7e7e",
    marginLeft: 230
  },
  hrLine: {
    width: "100%",
    height: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 2
  },
  nextButtonView: {
    alignItems: "center",
    marginTop: 300,
    width: "100%"
  },
  nextButtonStyle: {
    backgroundColor: "#00d466",
    paddingVertical: 15,
    paddingHorizontal: 50
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 20
  }
});

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { RNCamera } from "react-native-camera";

export default class CameraScreen extends Component {
  static navigationOptions = () => ({ tabBarLabel: () => {} });
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        >
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
            />
          </View>
        </RNCamera>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.warn(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonView: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#ffffff",
    borderRadius: 100,
    borderWidth: 5,
    width: 85,
    height: 85,
    alignItems: "center",
    marginBottom: 20
  },
  capture: {
    width: 75,
    height: 75,
    borderRadius: 50,
  }
});

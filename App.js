import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import LighVide from "./Images/splash.mp4";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={LighVide}
          shouldPlay
          style={{ width: "100%", height: "100%" }}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          controls={true}
          paused={false}
          fullscreen={true}
          resizeMode="cover"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

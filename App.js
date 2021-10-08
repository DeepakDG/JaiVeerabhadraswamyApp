import React, { Component } from 'react';  
import { StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";
import LighVide from "./Images/splash_video.mp4";

export default class Myapp extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <View style={styles.SplashScreen_ChildView}>
          {/* <View style={styles.container}> */}
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
          {/* </View> */}
        </View>
      </View>
    );
    return (
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: "center" }}> Splash Screen Example</Text>
        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BCD4",
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

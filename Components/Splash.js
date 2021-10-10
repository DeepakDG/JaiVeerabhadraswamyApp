import React, { Component } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { Video } from "expo-av";
import LighVide from "./Images/splash_video.mp4";

export class Splash extends Component {
  goToScreen(routeName) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: routeName })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen("Root");
      },
      5000,
      this
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        {/* <Text style={styles.text}> Splash Screen </Text> */}
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
});

export default Splash;

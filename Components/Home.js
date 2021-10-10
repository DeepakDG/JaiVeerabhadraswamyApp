import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is Home Component </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

export default Home;

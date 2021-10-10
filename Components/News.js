import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> This is News Component </Text>
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
    backgroundColor: "green",
  },
});

export default News;

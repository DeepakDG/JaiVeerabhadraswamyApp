import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export class Home extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'veerabhadraApp',
      },
      {
        id: 2,
        name: 'veerabhadraApp2',
      },
      {
        id: 3,
        name: 'veerabhadraApp',
      },
      {
        id: 1,
        name: 'veerabhadraApp2',
      },
    ],
  };

  alertItemName = (item) => {
    alert(item.name);
  };

  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 10,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  text: {
    color: "#4f603c",
  },
});

export default Home;

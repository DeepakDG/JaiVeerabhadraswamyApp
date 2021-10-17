import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

export default class Home extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  //handling onPress action
  getListViewItem = (item) => {
    // Alert.alert(item.key);
    this.props.navigation.navigate("About");
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {
              id: 0,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸುಪ್ರಭಾತ",
            },
            {
              id: 1,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಕವಚಂ",
            },
            {
              id: 2,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ದಂಡಕಂ",
            },
            {
              id: 3,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ತಾರಾವಳಿ",
            },
            {
              id: 4,
              key: "ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟಕಂ",
            },
            {
              id: 5,
              key: "ಶ್ರೀ ಭದ್ರ ಕವಚಂ",
            },
            {
              id: 6,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಹಸ್ರನಾಮಸ್ತೋತ್ರ",
            },
            {
              id: 7,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಹಸ್ರನಾಮವಳಿ",
            },
            {
              id: 8,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಅಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳಿ ಸ್ತೋತ್ರ",
            },
            {
              id: 9,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಅಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳಿ",
            },
            {
              id: 10,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ವಡಪುಗಳು",
            },
            {
              id: 11,
              key: "ಗುಗ್ಗುಳದ ಬಗ್ಗೆ ಮಾಹಿತಿ",
            },
            {
              id: 12,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಂಕ್ಷಿಪ್ತ ಪರಿಚಯ",
            },
            {
              id: 13,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಆಚರಣೆಗಳು",
            },
            {
              id: 14,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಾರ್ಥನೆ",
            },
            {
              id: 15,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಮಂಗಳ ಶ್ಲೋಕ",
            },
            {
              id: 16,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಶತಕ",
            },
            {
              id: 17,
              key: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಮಂಗಳ",
            },
            {
              id: 18,
              key: "ದ್ವಾತ್ರಿಂಶದ್ಭುಜ ಶ್ರೀ ವೀರಭದ್ರ ಧ್ಯಾನಂ",
            },
            {
              id: 19,
              key: "ಶ್ರೀ ಶರಭ ಹೃದಯ ಸ್ತೋತ್ರ",
            },
            {
              id: 20,
              key: "ಶ್ರೀ ಶರಭೋಪನಿಷತ್ತು",
            },
          ]}
          renderItem={({ item }) => (
            <Text
              style={styles.item}
              onPress={this.getListViewItem.bind(this, item)}
            >
              {item.key}
            </Text>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent("AwesomeProject", () => Home);

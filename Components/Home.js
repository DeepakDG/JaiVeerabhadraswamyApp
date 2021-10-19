import React, { Component } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Button,
} from "react-native";
import { Icon } from "react-native-elements";

export default class Home extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ffffff",
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
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonstyle}>
          <TouchableOpacity>
            <Image source={require("../Components/Images/overflow.png")} />
          </TouchableOpacity>
        </View>
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
            <TouchableOpacity
              onPress={() => {
                // this.getListViewItem.bind(this, item);
                 this.props.navigation.navigate("About")
              }}
            >
              <View style={styles.title}>
                <Text style={{ fontWeight: 'bold' }}
                  // style={styles.item}
                  // onPress={this.getListViewItem.bind(this, item)}
                >
                  {item.key}
                </Text>
                <Icon name="chevron-right" type="entypo" color="#272d2f" />
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fe724c",
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topbutton: {
    position: "absolute",
    right: 5,
    top: 5,
    width: "10%",
    height: 150,
  },
  buttonstyle: {
    alignSelf: "flex-end",
    right: 5,
    top: 5,
    width: "10%",
    height: 50,
  },
  title: {
    fontSize: 20,
    color: "#272d2f",
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent("AwesomeProject", () => Home);

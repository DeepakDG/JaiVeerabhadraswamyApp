import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";

const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
     
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#fe724c",
    padding: 15,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  textalign: {
    textAlign: "justify",
    fontSize: 20,
    color: "#ffffff",
    padding: 15,
  },
});

export default MyPager;

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Home";
import Splash from "./Splash";
import TabNavigator from "./BottomTabNavigator";
import React, { Component } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        headerShown: false,
        // headerTitle: "Jai Veerabhadra",
        // headerStyle: {
        //   backgroundColor: "#fe724c",
        // },
      },
    },
    Root: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
        headerTitle: "Shri Veerabhadra",
        headerStyle: {
          backgroundColor: "#fe724c",
        },
        // headerRight:()=>(
        //   <Button
        //     onPress={() => alert("This is a button!")}
        //     title="Info"
        //     color="#ff0000"
        //   />
        // ),
      },
    },
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(AppNavigator);

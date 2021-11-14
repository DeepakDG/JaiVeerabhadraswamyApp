import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Component } from "react-native";
import AppNavigator from "./Components/Navigator";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  return  <MenuProvider><AppNavigator /></MenuProvider>;
}
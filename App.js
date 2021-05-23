import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import Ig from "./screens/fb"
import Fb from "./screens/ig"

export default class App extends Component {
 render(){
  return (
   <AppContainer />
  );
 }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: Fb},
  Search: {screen: Ig}
})


const AppContainer = createAppContainer(TabNavigator)
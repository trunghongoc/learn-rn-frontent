import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Home from './screen/Home'
import Notification from './screen/Notification'

import { DrawerNav } from './drawer/DrawerNav';

const MyAppDraw = createDrawerNavigator({
  MyHome: {
    screen: Home,
  },
  Notifications: {
    screen: Notification,
  },
});

export default class App extends React.Component {
  render() {
    return <DrawerNav />;
  }
}
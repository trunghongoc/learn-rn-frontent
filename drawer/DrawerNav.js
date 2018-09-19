
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import {DrawerNavigator} from 'react-navigation'; // không được chấp cmn nhận ))
import Home from './../screen/Home'
import Notification from './../screen/Notification'
import drawerContentComponents from './drawerContentComponents'

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export const DrawerNav = createDrawerNavigator (
  {
      Home: { screen: Home },
      Notification: { screen: Notification }
  },
  {
     contentComponent: drawerContentComponents
  }
);
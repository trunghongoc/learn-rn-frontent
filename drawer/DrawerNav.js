
import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import {DrawerNavigator} from 'react-navigation'; // không được chấp cmn nhận ))
import Home from './../screen/Home';
import Notifications from './../screen/Notifications';
import MyProfile from './../screen/MyProfile';
import News from './../screen/News';
import drawerContentComponents from './drawerContentComponents';

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

export const DrawerNav = createDrawerNavigator (
  {
      Home: { screen: Home },
      Notifications: { screen: Notifications },
      MyProfile: { screen: MyProfile },
      News: { screen: News },
  },
  {
     contentComponent: drawerContentComponents
  }
);
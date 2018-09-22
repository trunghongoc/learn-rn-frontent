// import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import {DrawerNavigator} from 'react-navigation'; // không được chấp cmn nhận ))
import Home from './../screen/Home';
import Notifications from './../screen/Notifications';
import MyProfile from './../screen/MyProfile';
import News from './../screen/News';
import drawerContentComponents from './drawerContentComponents';
import { Footer } from './Footer';

import { createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

/*const Footer = createBottomTabNavigator({
  Home: { screen: Home },
  Notifications: { screen: Notifications },
  MyProfile: { screen: MyProfile },
  News: { screen: News }
});

const HeaderAhi = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:({navigation}) => ({
            title: "Main",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Text>a</Text>
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
  },
  Notifications: {
    screen: Notifications,
    navigationOptions:({navigation}) => ({
            title: "Main",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Text>a</Text>
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
  },
  MyProfile: {
    screen: MyProfile,
    navigationOptions:({navigation}) => ({
            title: "Main",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Text>a</Text>
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
  },
  News: {
    screen: News,
    navigationOptions:({navigation}) => ({
            title: "Main",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Text>a</Text>
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
  },
});
*/

export const DrawerNav = createDrawerNavigator (
  {
    Home: Footer
      /*Home: { screen: Home },
      Notifications: { screen: Notifications },
      MyProfile: { screen: MyProfile },
      News: { screen: News },*/
  },
  {
     contentComponent: drawerContentComponents
  }
);
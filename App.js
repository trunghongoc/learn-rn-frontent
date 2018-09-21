import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Home from './screen/Home';
import Notifications from './screen/Notifications';
import { DrawerNav } from './drawer/DrawerNav';

import NumberContext from './context/NumberContext';
import GlobalContext from './context/GlobalContext';
import Header from './part/Header';

import { globalState } from './context/GlobalContext'

// đang không dùng thằng này mà dùng thằng DrawerNav (tự custom) bên trên
const MyAppDraw = createDrawerNavigator({
  MyHome: {
    screen: Home,
  },
  Notifications: {
    screen: Notifications,
  },
});


export default class App extends React.Component {
  state = {
    ...globalState
  };

  updateUser = () => {
    this.setState({
      user: {
        loged: true
      }
    });
  }

  setActiveMenu = (value) => {
    this.setState({ menuActive: value });
  }

  render() {
    let context = {
      state: this.state,
      actions: {
        updateUser: this.updateUser,
        setActiveMenu: this.setActiveMenu
      }
    }
    return (
      <GlobalContext.Provider value={context}>
        <DrawerNav/>
      </GlobalContext.Provider>
    )
  }
}
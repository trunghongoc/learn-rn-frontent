import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Home from './screen/Home'
import Notification from './screen/Notification'
import { DrawerNav } from './drawer/DrawerNav';

import NumberContext from "./context/NumberContext";
import Header from './part/Header';

const MyAppDraw = createDrawerNavigator({
  MyHome: {
    screen: Home,
  },
  Notifications: {
    screen: Notification,
  },
});

function Counter(props) {
  return (
    <NumberContext.Consumer>{val => <Text> {val} </Text>}</NumberContext.Consumer>
  );
}

export default class App extends React.Component {
  state = {
    number: 0
  };

  onIncHandler = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  onDecHandler = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  // <Button onPress={this.onIncHandler} title="Increment"/>
  // <Button onPress={this.onDecHandler} title="Decrement"/>

  render() {
    return (
      <NumberContext.Provider value={this.state.number}>
        <DrawerNav/>
      </NumberContext.Provider>
    )
  }
}
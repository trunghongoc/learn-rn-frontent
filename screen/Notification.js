import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import NumberContext from "./../context/NumberContext";
import Header from '../part/Header';

export default class Notification extends React.Component {
  render() {
    return (
      <NumberContext.Consumer>
        {(number) => (
        <View>
          <Header {...this.props}/>
          <View>
            <Button
              onPress={() => this.props.navigation.goBack()}
              title="Trang notification -> Go to home"
            />
          </View>
        </View>
        )}
      </NumberContext.Consumer>
    );
  }
}

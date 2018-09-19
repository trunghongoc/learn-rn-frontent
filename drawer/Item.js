import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import * as Icon from './../icons/SimpleLine';

export default class Item extends Component {
  render() {
    const { pressEvent, Icon_, text } = this.props
    return (
      <TouchableOpacity onPress={pressEvent}>
        <View
          style={styles.screenStyle}>
          <TouchableOpacity style={styles.icon}>
            {Icon_}
          </TouchableOpacity>
          <View style={styles.lineHr}>
            <Text style={styles.screenTextStyle}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  screenStyle: {
      height: 38,
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center'
  },
  icon: {
    marginRight: 12,
    marginBottom: 7
  },
  screenTextStyle:{
    fontSize: 18,
    marginLeft: 10,
  },
  lineHr: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingBottom: 9
  },
});

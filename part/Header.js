import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as Icon from '../icons/SimpleLine';
import * as Config from '../config/Config';

export default class Header extends React.Component {
  pressLeftBtn = () => {
    this.props.navigation.openDrawer();
  }

  pressRightBtn = () => {
    alert("Click vào button bên phải!");
  }

  render() {
    return (
      <View>
        <View style={styles.pullDiv}/>
        <View style={styles.header}>
          <View style={styles.textLeft}>
            <TouchableOpacity onPress={this.pressLeftBtn} style={styles.btnHeader}>
              <Icon.Menu color={Config.textWhite}/>
            </TouchableOpacity>
          </View>
          <View style={styles.textCent}>
            <Icon.Diamond color={Config.textWhite}/>
          </View>
          <View style={styles.textRight}>
            <TouchableOpacity onPress={this.pressRightBtn} style={styles.btnHeader}>
              <Icon.Info color={Config.textWhite}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  pullDiv: {
    height: 20,
    backgroundColor: Config.primaryColor,
  },
  header: {
    height: 40,
    backgroundColor: Config.primaryColor,
    flexDirection: 'row'
  },
  textLeft: {
    flex: 1,
    backgroundColor: Config.primaryColor,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textCent: {
    flex: 1,
    backgroundColor: Config.primaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRight: {
    flex: 1,
    backgroundColor: Config.primaryColor,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  white: {
    color: '#fff'
  },
  btnHeader: {
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberContext from "./../context/NumberContext";
import Header from '../part/Header';
import FooterMenu from './../part/FooterMenu';

export default class Notification extends React.Component {
  render() {
    return (
      <NumberContext.Consumer>
        {(context) => (
        <View style={styles.container}>
          <Header {...this.props}/>
          <View style={styles.container}>
            <View style={styles.containerPadding}>
              <Text>Trang Notification</Text>
              <Text>{context.state.menuActive}</Text>
            </View>
          </View>
          <FooterMenu {...this.props}/>
        </View>
        )}
      </NumberContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerPadding: {
    flex: 1,
    paddingHorizontal: 10
  }
});
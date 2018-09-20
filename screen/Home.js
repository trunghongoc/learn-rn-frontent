import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberContext from "./../context/NumberContext";
import Header from '../part/Header';
import Segement from '../part/Segment';
import FooterMenu from './../part/FooterMenu';

export default class Home extends React.Component {
  render() {
    return (
      <NumberContext.Consumer>
        {(context) => (
          <View style={styles.container}>
            <Header {...this.props}/>
            <View style={styles.container}>
              <View style={styles.containerPadding}>
                <Text>Trang Home</Text>
                <Segement/>
                <Text>{context.state.menuActive}</Text>
              </View>

              <FooterMenu {...this.props}/>
            </View>
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
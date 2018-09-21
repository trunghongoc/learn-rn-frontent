import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableNativeFeedback } from 'react-native';
import GlobalContext from "./../context/GlobalContext";
import Header from '../part/Header';
import FooterMenu from '../part/footer/FooterMenu';
import * as Config from '../config/Config';

export default class News extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          <View style={styles.container}>
            <Header {...this.props}/>
            <View style={styles.container}>
              <View style={styles.containerPadding}>
                <Text>News page</Text>
              </View>

              <FooterMenu {...this.props}/>
            </View>
          </View>
        )}
      </GlobalContext.Consumer>
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
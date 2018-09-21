import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableNativeFeedback } from 'react-native';
import GlobalContext from "./../context/GlobalContext";
import Header from '../part/Header';
import Segement from '../part/Segment';
import FooterMenu from '../part/footer/FooterMenu';
import * as Config from '../config/Config';
import SView from './../part/scrollview_h/SView';

export default class Home extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(context) => (
          <View style={styles.container}>
            <Header {...this.props}/>
            <View style={styles.container}>
              <View style={styles.containerPadding}>
                <Segement/>
                <SView title="Danh sách bạn bè"/>
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
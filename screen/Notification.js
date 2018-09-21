import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalContext from "./../context/GlobalContext";
import Header from './../part/Header';
import FooterMenu from './../part/footer/FooterMenu';

export default class Notification extends React.Component {
  render() {
    return (
      <GlobalContext.Consumer>
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
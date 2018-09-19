import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import NumberContext from "./../context/NumberContext";
import Header from '../part/Header';
import Segement from '../part/Segment';

export default class Home extends React.Component {
  render() {
    return (
      <NumberContext.Consumer>
        {(context) => (
          <View>
            <Header {...this.props}/>
            <View style={styles.container}>
              <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Trang Home -> Go to notifications"
              />
            </View>
            <Segement/>
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
}
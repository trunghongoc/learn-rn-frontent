import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import NumberContext from "./../context/NumberContext";

export default class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../images/chat.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <NumberContext.Consumer>
        {(number) => (
          <View>
            <Button
              onPress={() => this.props.navigation.navigate('Notifications')}
              title="Go to notifications"
            />
            <Button
              onPress={() => this.props.navigation.openDrawer()}
              title="Open"
            />
            <Text>{number}</Text>
            <Text>Ahihi do ngock</Text>
          </View>
        )}
      </NumberContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

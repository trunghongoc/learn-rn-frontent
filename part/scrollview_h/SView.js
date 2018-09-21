import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import * as Config from './../../config/Config';
import Item from './Item';

export default class SView extends React.Component {
  render() {
    const { title } = this.props;
    const list = [
      'Hồ Ngọc Trung', 'Óc Xen', 'Óc Phương', 'Nam Ocscho', 'Gió', 'Nắng của ai'
    ];
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.scrollView}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {
              list.map((text, index) => <Item text={text} key={index}/>)
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: Config.grayB
  },
  scrollView: {
    width: Dimensions.get('window').width - 20,
    height: 84,
    marginTop: 10
  }
});
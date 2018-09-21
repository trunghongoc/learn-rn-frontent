import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class Segement extends Component {
  state = {
    selectedIndex: 0,
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    return (
      <View style={styles.segment}>
        <SegmentedControlTab
          values={['First', 'Second', 'Third']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          badges={[null, 2, null]}
          accessibilityLabels={['ahi', 'bhi', 'chi']}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segment: {
    marginVertical: 7
  }
});
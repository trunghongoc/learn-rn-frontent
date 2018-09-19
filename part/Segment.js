import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class Segement extends Component {
  state = {
    selectedIndex: 0,
  }

  handleIndexChange = (index, a) => {
    alert(index)
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    return (
      <View>
        <SegmentedControlTab
          values={['First', 'Second', 'Third']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          badges={[, 2, 3]}
          accessibilityLabels={['ahi', 'bhi', 'chi']}
          />
      </View>
    );
}
}

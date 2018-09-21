import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native';
import NumberContext from "./../context/NumberContext";
import Header from '../part/Header';
import Segement from '../part/Segment';
import FooterMenu from './../part/FooterMenu';
import * as Config from '../config/Config';

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
                <View style={styles.scrollViewTop}>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    <View style={styles.box}>
                      <TouchableNativeFeedback>
                        <View style={styles.boxContent}>
                          <View style={styles.boxImg}></View>
                          <Text style={styles.boxText}>Trung Hồ Ngọc</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>

                    <View style={styles.box}>
                      <TouchableNativeFeedback>
                        <View style={styles.boxContent}>
                          <View style={styles.boxImg}></View>
                          <Text style={styles.boxText}>Hồ Ngọc Trung</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>

                    <View style={styles.box}>
                      <TouchableNativeFeedback>
                        <View style={styles.boxContent}>
                          <View style={styles.boxImg}></View>
                          <Text style={styles.boxText}>Trung Ngọc Hồ</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>

                    <View style={styles.box}>
                      <TouchableNativeFeedback>
                        <View style={styles.boxContent}>
                          <View style={styles.boxImg}></View>
                          <Text style={styles.boxText}>Gì Vậy Má</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>

                    <View style={styles.box}>
                      <TouchableNativeFeedback>
                        <View style={styles.boxContent}>
                          <View style={styles.boxImg}></View>
                          <Text style={styles.boxText}>Cái Gì Nè</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>

                    <View style={styles.box}>
                      <TouchableNativeFeedback>
                        <View style={styles.boxContent}>
                          <View style={styles.boxImg}></View>
                          <Text style={styles.boxText}>Uổ Zậy Hả</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>

                    <View style={styles.box}>
                      <TouchableNativeFeedback>
                        <View style={styles.boxContent}>
                          <View style={styles.boxImg}></View>
                          <Text style={styles.boxText}>Kỳ Ghê Hà</Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                  </ScrollView>
                </View>

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
  },
  scrollViewTop: {
    width: Dimensions.get('window').width - 20,
    height: 84,
    marginTop: 10
  },
  box: {
    width: 86,
    height: 84,
  },
  boxContent: {
    width: 82,
    height: 84,
  },
  boxImg: {
    width: 66,
    height: 66,
    borderRadius: 65,
    backgroundColor: Config.gray,
    marginLeft: 8
  },
  boxText: {
    color: '#000',
    width: 820,
    marginLeft: 4,
  }
});
import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import NumberContext from "./../context/NumberContext";
import * as Icon from '../icons/SimpleLine';
import * as Config from '../config/Config';

export default class FooterMenu extends React.Component {
    homeClick = (context) => {
        context.actions.setActiveMenu('home');
        this.props.navigation.navigate('Home');
    }

    notificationClick = (context) => {
        context.actions.setActiveMenu('notification');
        this.props.navigation.navigate('Notification');
    }

    render() {
        return (
            <NumberContext.Consumer>
            {(context) => (
                <View style={styles.footer}>
                    <TouchableNativeFeedback onPress={ () => this.homeClick(context) }>
                        <View style={context.state.menuActive == 'home' ? styles.itemActive : styles.item}>
                            <Icon.PieChart color={Config.textWhite}/>
                            <Text style={styles.text}>Trang chủ</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={ () => context.actions.setActiveMenu('profile') }>
                        <View style={context.state.menuActive == 'profile' ? styles.itemActive : styles.item}>
                            <Icon.User color={Config.textWhite}/>
                            <Text style={styles.text}>Cá nhân</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={ () => context.actions.setActiveMenu('news') }>
                        <View style={ context.state.menuActive == 'news' ? styles.itemActive : styles.item }>
                            <Icon.EarphonesAlt color={Config.textWhite}/>
                            <Text style={styles.text}>Tin tức</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={ () => this.notificationClick(context) }>
                        <View style={ context.state.menuActive == 'notification' ? styles.itemActive : styles.item }>
                            <Icon.Bell color={Config.textWhite}/>
                            <Text style={styles.text}>Thông báo</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            )}
            </NumberContext.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        height: 52,
        backgroundColor: Config.primaryColor,
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.primaryColorLight
    },
    text: {
        color: Config.textWhite
    }
});
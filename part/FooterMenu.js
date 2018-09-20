import React from 'react';
import { StyleSheet, View } from 'react-native';
import NumberContext from "./../context/NumberContext";
import * as Icon from '../icons/SimpleLine';
import * as Config from '../config/Config';
import FooterItem from './FooterItem';

export default class FooterMenu extends React.Component {
    homeClick = (context) => {
        context.actions.setActiveMenu('home');
        this.props.navigation.navigate('Home');
    }

    myProfileClick = (context) => {
        context.actions.setActiveMenu('myProfile');
        this.props.navigation.navigate('myProfile');
    }

    newsClick = (context) => {
        context.actions.setActiveMenu('news');
        this.props.navigation.navigate('news');
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
                    <FooterItem
                        badge={null}
                        TypeIcon={Icon.PieChart}
                        text="Trang chủ"
                        menuKey="home"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.homeClick(context) } />

                    <FooterItem
                        badge={null}
                        TypeIcon={Icon.User}
                        text="Cá nhân"
                        menuKey="myProfile"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.myProfileClick(context) } />

                    <FooterItem
                        badge={5}
                        TypeIcon={Icon.EarphonesAlt}
                        text="Tin tức"
                        menuKey="news"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.newsClick(context) } />


                    <FooterItem
                        badge={22}
                        TypeIcon={Icon.Bell}
                        text="Thông báo"
                        menuKey="notification"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.notificationClick(context) } />
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
    
    itemActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.primaryColorLight
    }
});
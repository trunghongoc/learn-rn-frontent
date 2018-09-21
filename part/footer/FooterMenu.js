import React from 'react';
import { StyleSheet, View } from 'react-native';
import GlobalContext from "../../context/GlobalContext";
import * as Icon from './../../icons/SimpleLine';
import * as Config from './../../config/Config'
import Item from './Item';

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
        const stylePrimary = false;
        const styleFooter = stylePrimary ? styles.footerPrimary : styles.footerDefault;

        return (
            <GlobalContext.Consumer>
            {(context) => (
                <View style={[styles.publicStyle, styleFooter]}>
                    <Item
                        stylePrimary={stylePrimary}
                        badge={null}
                        TypeIcon={Icon.PieChart}
                        text="Trang chủ"
                        menuKey="home"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.homeClick(context) } />

                    <Item
                        stylePrimary={stylePrimary}
                        badge={null}
                        TypeIcon={Icon.User}
                        text="Cá nhân"
                        menuKey="myProfile"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.myProfileClick(context) } />

                    <Item
                        stylePrimary={stylePrimary}
                        badge={5}
                        TypeIcon={Icon.EarphonesAlt}
                        text="Tin tức"
                        menuKey="news"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.newsClick(context) } />


                    <Item
                        stylePrimary={stylePrimary}
                        badge={22}
                        TypeIcon={Icon.Bell}
                        text="Thông báo"
                        menuKey="notification"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.notificationClick(context) } />
                </View>
            )}
            </GlobalContext.Consumer>
        );
    }
}

const styles = StyleSheet.create({
    publicStyle: {
        height: 52,
        flexDirection: 'row',
        marginTop: 7
    },
    footerPrimary: {
        backgroundColor: Config.primaryColor,
    },
    footerDefault: {
        backgroundColor: Config.white,
        borderTopWidth: 1,
        borderColor: Config.grayM
    }
});
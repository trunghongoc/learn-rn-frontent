import React from 'react';
import { StyleSheet, View } from 'react-native';
import GlobalContext from "../../context/GlobalContext";
import * as Icon from './../../icons/SimpleLine';
import * as Config from './../../config/Config'
import Item from './Item';

export default class FooterMenu extends React.Component {
    homeClick = (context) => {
        context.actions.setActiveMenu('Home');
        this.props.navigation.navigate('Home');
    }

    myProfileClick = (context) => {
        context.actions.setActiveMenu('MyProfile');
        this.props.navigation.navigate('MyProfile');
    }

    newsClick = (context) => {
        context.actions.setActiveMenu('News');
        this.props.navigation.navigate('News');
    }

    notificationClick = (context) => {
        context.actions.setActiveMenu('Notifications');
        this.props.navigation.navigate('Notifications');
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
                        menuKey="Home"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.homeClick(context) } />

                    <Item
                        stylePrimary={stylePrimary}
                        badge={null}
                        TypeIcon={Icon.User}
                        text="Cá nhân"
                        menuKey="MyProfile"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.myProfileClick(context) } />

                    <Item
                        stylePrimary={stylePrimary}
                        badge={5}
                        TypeIcon={Icon.EarphonesAlt}
                        text="Tin tức"
                        menuKey="News"
                        menuActive={context.state.menuActive}
                        handlePress={ () => this.newsClick(context) } />


                    <Item
                        stylePrimary={stylePrimary}
                        badge={22}
                        TypeIcon={Icon.Bell}
                        text="Thông báo"
                        menuKey="Notifications"
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
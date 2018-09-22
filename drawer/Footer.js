import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Home from './../screen/Home';
import Notifications from './../screen/Notifications';
import MyProfile from './../screen/MyProfile';
import News from './../screen/News';
import * as Icon from '../icons/SimpleLine';
import * as Config from '../config/Config';
import { Item as FooterItem } from './../part/footer/Item';

import { BottomTabBar, createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

export const Footer = createBottomTabNavigator({
        Home: Home,
        MyProfile: MyProfile,
        News: News,
        Notifications: Notifications,
    }, {   
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            if (routeName === 'Home')
                return <Icon.PieChart color={tintColor} size={24}/>;
            else if (routeName === 'MyProfile')
                return <Icon.User color={tintColor} size={24}/>;
            else if (routeName === 'News')
                return <Icon.EarphonesAlt color={tintColor} size={24}/>;
            else if (routeName === 'Notifications')
                return <Icon.Bell color={tintColor} size={24}/>;
            else
                return <Icon.PieChart color={tintColor} size={24}/>;
        },
        
    }),
    /*tabBarComponent: ({ navigation }) => {
        
        return <View style={{flex: 1}}>
            <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Home')}>
            <View
                
                style={{flex: 1}}
                stylePrimary={false}
                badge={null}
                TypeIcon={Icon.PieChart}
                text="Trang chủ"
                menuKey="Home"
                menuActive={false}
                handlePress={ () => navigation.navigate('Home') }>
                <Text>Trang chủ</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('Notifications')}>
            <View
                onPress={() => navigation.navigate('Notifications')}
                style={{flex: 1}}
                stylePrimary={false}
                badge={null}
                TypeIcon={Icon.PieChart}
                text="Notifications"
                menuKey="Home"
                menuActive={false}
                handlePress={ () => navigation.navigate('Notifications') }>
                <Text>Notifications</Text>
            </View>
            </TouchableOpacity>
        </View>
    },*/
    tabBarOptions: {
        activeTintColor: Config.primaryColor,
        inactiveTintColor: Config.grayM,  
    },
});
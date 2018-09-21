import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import * as Config from '../config/Config';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    default: {
        color: Config.white,
    },
    active: {
        color: Config.black
    },
    badge: {
        paddingHorizontal: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        position: 'absolute',
        top: 5,
        right: 12
    },
    bageText: {
        color: '#fff',
        fontSize: 12
    }
});

export default class FooterItem extends React.Component {
    render() {
        const { badge, TypeIcon, text, menuKey, menuActive, handlePress } = this.props;
        const className = menuKey === menuActive ? styles.active : styles.default;
        const color = menuKey === menuActive ? Config.black : Config.white;
        return (
        <TouchableNativeFeedback onPress={ handlePress }>
            <View style={styles.item}>
                {
                    badge !== null &&
                    <View style={styles.badge}>
                        <Text style={styles.bageText}>{badge > 9 ? '9+' : badge}</Text>
                    </View>
                }
                <TypeIcon color={color}/>
                <Text style={className}>{text}</Text>
            </View>
        </TouchableNativeFeedback>
        )
    }
}


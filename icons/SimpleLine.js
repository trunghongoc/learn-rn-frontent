import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import * as Config from '../config/Config';

export const Diamond = (props) => <Icon name="diamond" color={props.color || Config.icon.color} size={props.size || Config.icon.size} />
export const Menu = (props) => <Icon name="menu" color={props.color || Config.icon.color} size={props.size || Config.icon.size} />
export const Smile = (props) => <Icon name="emotsmile" color={props.color || Config.icon.color} size={props.size || Config.icon.size} />
export const Info = (props) => <Icon name="info" color={props.color || Config.icon.color} size={props.size || Config.icon.size} />
export const Home = (props) => <Icon name="home" color={props.color || Config.icon.color} size={props.size || Config.icon.size} />

export const Globe = (props) => <Icon name="globe" color={props.color || Config.icon.color} size={props.size || Config.icon.size} />
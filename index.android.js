/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StatusBar
} from 'react-native';

import App from './src/MyApp'
/* import Test from './src/Test'*/
/* StatusBar.setHidden(true);*/ 

AppRegistry.registerComponent('appDemo', () =>App);

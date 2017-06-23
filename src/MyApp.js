import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {TestHome, Home, Login, Register} from './pages';


export default class App extends Component {
    render(){
        return <Router>
            <Scene key="home" component={TestHome} initial hideNavBar/>
            <Scene key="login" component={Login} hideNavBar/>
            <Scene key="register" component={Register} hideNavBar/>
            </Router>;
    }
}

import  React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {View, Button} from 'react-native';


export default class TestHome extends Component{
    state = {};

    handlePressSignIn(){
        Actions.login();
    }

    render(){
        return <View>
            <Button
        onPress={this.handlePressSignIn.bind(this)}
        title="登录/注册"
        color="#841584"
            />
            </View>;
    }
};

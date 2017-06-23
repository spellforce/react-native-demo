import React, {Component, PropTypes} from 'react';
import {View, Text, Alert, StyleSheet, Button,ScrollView} from 'react-native';
import {Sample,Sae} from 'react-native-spellforce-textinput';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Actions, ActionConst} from 'react-native-router-flux';
import API,{postJson} from '../utils/API';

export default class Login extends Component {
    static propTypes = {
        loginText:PropTypes.string,
        registerText:PropTypes.string,
        InputPlaceholder:PropTypes.array,
    };
    static defaultProps = {
        loginText:"登录",
        registerText:"注册",
    };
    constructor(props,context){
        super(props,context);

    }
    state = {
        username: '18052019389',
        password: '123456',
    };

    // 网络请求
    Login() {
        postJson(API.LOGIN,{user_account:this.state.username,user_password:this.state.password},function (data) {
            if(data.resultCode == 0){
                Alert.alert("登录成功");
                Actions.home();
            }else {
                Alert.alert(data.msg);
            }
        });
    }

    handleChangeInput(stateName, text) {
        this.setState({
            [stateName]: text
        })
    }

    handlePressSignIn() {
        Alert.alert('Button pressed', 'User sign in');
    }

    handlePressSignUp() {
        Actions.register();
    }

    handleToHome() {
        Actions.home();
    }

    render() {
        const {loginText,registerText} = this.props;
        return (
            <View style={[styles.card]}>
                <Sample
                    label={'请输入手机号码'}
                    inputStyle={{ color: '#000' }}
                    iconClass={FontAwesomeIcon}
                    iconName={'user-md'}
                    iconColor={'#da4e43'}
                />
                <Sample
                    style={styles.input}
                    label={'请输入登录密码'}
                    inputStyle={{ color: '#000' }}
                    iconClass={FontAwesomeIcon}
                    iconName={'lock'}
                    iconColor={'#da4e43'}
                />
                <Text style={styles.button} onPress={this.handlePressSignIn}>{loginText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width: "100%", textAlign: "center", marginTop: 20, padding: 10,backgroundColor:"#dddddd",color:"#fff"
    },
    card: {
        padding: 15,
    },
    input: {
        marginTop: 5,
    },
});

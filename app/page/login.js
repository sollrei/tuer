import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    AlertIOS
} from 'react-native';
import {sty} from '../style';

import * as actions from '../store/action';
import url from '../config';


export default class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
    }

    render () {

        const {dispatch, navigator} = this.props;

        return (
            <View style={[sty.container, {backgroundColor: '#DFE8ED'}]}>
                <View style={sty.login}>
                    <Image source={require('image!login')} />
                    <View style={sty.loginBox}>
                        <TextInput
                            returnKeyType="next"
                            style={sty.loginTxt}
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({
                                username: text
                            })}
                        />
                        <Image
                            style={{position: 'absolute', left: 20, top: 25}}
                            source={require('image!username')}
                        />
                        <TextInput
                            style={sty.loginTxt}
                            secureTextEntry={true}
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({
                                password: text
                            })}
                        />
                        <Image
                            style={{position: 'absolute', left: 20, top: 86}}
                            source={require('image!password')}
                        />
                        <TouchableOpacity
                            style={sty.loginButton}
                            onPress={() => {

                                const _ = this;

                                if (this.state.loading) {

                                } else {
                                    this.setState({
                                        loading: true
                                    });

                                    fetch(url.login + '?name='
                                        + this.state.username
                                        + '&password='
                                        + this.state.password, {
                                        method: 'GET'
                                    }).then((res) => {
                                        return res.json();
                                    }).then(res => {
                                        if (res.status) {
                                            dispatch(actions.setLogin(res.data));
                                            navigator.pop();
                                        } else {
                                            AlertIOS.alert(
                                                '登陆失败',
                                                res.message
                                            );
                                        }
                                        _.setState({
                                            loading: false
                                        });
                                    });
                                }
                            }}
                        >
                            <Text style={{fontSize: 20,color: '#fff'}}>{
                                this.state.loading ? '登录中' : '登录'
                            }</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';


import {sty} from '../style';
import Login from '../page/login';


export default class LoginButton extends Component {

    render () {

        const {navigator} = this.props;

        return (
            <View style={sty.homeLogin}>
                <TouchableOpacity
                    style={sty.homeLoginBtn}
                    onPress={() => {
                        navigator.push({
                            component: Login,
                            navigationBarHidden: false,
                            leftButtonIcon: require('image!arrow_left'),
                            barTintColor: '#DFE8ED',
                            onLeftButtonPress: () => navigator.pop(),
                            passProps: {...this.props}
                        })
                    }}
                >
                    <Text style={{color: '#fff', fontSize: 16}}>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }


}
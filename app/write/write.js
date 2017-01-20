import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {sty} from '../style';

import WriteDiary from './writeDiary';
import LoginButton from '../components/loginButton';

export default class Write extends Component {
    render () {

        const {navigator, user, dispatch} = this.props;

        if (user.login) {
            return (
                <View style={[sty.container, {
                    alignItems: 'center',
                    justifyContent: 'center'
                }]}>
                    <TouchableOpacity style={sty.writeDiary}>
                        <Image source={require('image!talk')} />
                        <Text style={sty.writeTxt}>说说</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={sty.writeDiary}
                        onPress={() => {
                            navigator.push({
                                component: WriteDiary,
                                title: '',
                                navigationBarHidden: false,
                                leftButtonIcon: require('image!close'),
                                onLeftButtonPress: () => navigator.pop(),
                                passProps: {...this.props}
                            });
                        }}
                    >
                        <Image source={require('image!diary')}/>
                        <Text style={sty.writeTxt}>日记</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={sty.container}>
                    <LoginButton navigator={navigator} dispatch={dispatch}/>
                </View>
            )
        }


    }
}

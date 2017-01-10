import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import {sty} from '../style';


export default class Write extends Component {
    render () {
        return (
            <View style={[sty.container, {
                alignItems: 'center',
                justifyContent: 'center'
            }]}>
                <View style={sty.writeDiary}>
                    <Text style={sty.writeTxt}>日记</Text>
                </View>
                <View style={sty.writeDiary}>
                    <Text style={sty.writeTxt}>说说</Text>
                </View>
            </View>
        )
    }
}

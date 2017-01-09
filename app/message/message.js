import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import {sty} from '../style';

import ScrollTab from '../components/scrollTab';

export default class Message extends Component {
    render () {
        const dom = <View><Text>1212</Text></View>
        return (
            <View>
                <ScrollTab
                    Content={dom}
                    tabs={[{
                        label: '动态'
                    },{
                        label: '系统消息'
                    }]}
                />
            </View>
        )
    }
}


import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import {sty} from '../style';

import ScrollTab from '../components/scrollTab';
import UserList from '../components/userList';

const {width} = Dimensions.get('window');

class My extends Component {
    render () {
        const dom = <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{width: width, flex: 1}}>
                <UserList data="http://192.168.12.47/play/datas/user.json"/>
            </View>
            <View style={{width: width, flex: 1}}><Text>hello</Text></View>
        </View>;
        return (
            <ScrollView style={[sty.container, {marginTop: -30}]}>
                <View style={sty.userHead}>
                    <Image
                        style={sty.userAvatar}
                        source={{uri: 'https://unsplash.it/100/100?image=0'}}
                    />
                    <Text style={sty.userName}>nanoka</Text>
                </View>
                <ScrollTab Content={dom} tabs={[{
                    label: '关注'
                }, {
                    label: '粉丝'
                }]}/>
            </ScrollView>
        )
    }
}

export default My;
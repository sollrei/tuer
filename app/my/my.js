import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {sty} from '../style';

import ScrollTab from '../components/scrollTab';
import UserList from '../components/userList';
import Login from '../page/login';


const {width} = Dimensions.get('window');

class My extends Component {
    render () {
        const dom = <View style={{flexDirection: 'row', flex: 1}}>
            <View style={{width: width, flex: 1}}>
                <UserList data="http://192.168.12.47/play/datas/user.json"/>
            </View>
            <View style={{width: width, flex: 1}}><Text>hello</Text></View>
        </View>;

        const {navigator} = this.props;
        return (
            <ScrollView style={[sty.container, {marginTop: -30}]}>
                <TouchableOpacity
                    style={sty.userHead}
                    onPress={() => {
                        {/*navigator.push({*/}
                            {/*title: '登录',*/}
                            {/*component: Login,*/}
                            {/*navigationBarHidden: false,*/}
                            {/*leftButtonIcon: require('image!arrow_left'),*/}
                            {/*onLeftButtonPress: () => navigator.pop(),*/}
                            {/*passProps: {...this.props}*/}
                        {/*})*/}
                    }}
                >
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={sty.userAvatar}
                            source={{uri: 'https://unsplash.it/100/100?image=0'}}
                        />
                        <Text style={sty.userName}>nanoka</Text>
                    </View>
                </TouchableOpacity>
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
import React, {Component} from 'react';

import {
    View,
    Dimensions
} from 'react-native';

import {sty} from '../style';

import Diary from '../components/diary';
import ScrollTab from '../components/scrollTab';
import LoginButton from '../components/loginButton';

import url from '../config';
const {width} = Dimensions.get('window');

class Home extends Component {

    constructor (props) {
        super(props);
    }

    render () {

        const {navigator, user, dispatch} = this.props;


        const dom = <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, width: width}}>
                {
                    user.login ?
                        <Diary
                            navigator={navigator}
                            data={url.getDiary + '?userid=1'}
                        /> :
                        <LoginButton navigator={navigator} dispatch={dispatch} />
                }
            </View>
            <View style={{flex: 1, width: width}}>
                <Diary
                    navigator={navigator}
                    data={url.getDiary}
                />
            </View>
        </View>;

        return (
            <View style={sty.container}>
                <ScrollTab Content={dom} tabs={[{
                    label: '日记'
                }, {
                    label: '发现'
                }]}/>
            </View>
        )



    }
}

export default Home;

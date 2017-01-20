import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import {sty} from '../style';
import url from '../config';
import Diary from '../components/diary';
import LoginButton from '../components/loginButton';
// var HTMLView = require('react-native-htmlview');
// {/*<HTMLView*/}
// {/*value={htmlContent}*/}
// {/*/>*/}
class Fav extends Component {
    render () {

        const {navigator, user, dispatch} = this.props;

        return (
            <View style={sty.container}>
                <View style={sty.header}>
                    <View style={sty.headerNav}>
                        <View style={sty.headerActiveView} >
                            <Text style={sty.headerTxt} >收藏</Text>
                        </View>
                    </View>
                </View>
                {
                    user.login ?
                    <View style={{flex: 1}}>
                        <Diary navigator={navigator} data={url.getDiary + '?userid=1'} />
                    </View> :
                    <LoginButton navigator={navigator} dispatch={dispatch}/>
                }
            </View>
        )
    }
}

export default Fav;
import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import {sty} from '../style';

import Diary from '../components/diary';
var HTMLView = require('react-native-htmlview');

class Fav extends Component {
    render () {
        // const htmlContent = '<p>大家好新年快乐<a href="http://jsdf.co">&hearts; nice job!</a></p>';
        return (
            <View style={sty.container}>
                <View style={sty.header}>
                    <View
                        style={sty.headerNav}
                    >
                        <View
                            style={sty.headerActiveView}
                        >
                            <Text style={sty.headerTxt} >收藏</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    {/*<HTMLView*/}
                        {/*value={htmlContent}*/}
                    {/*/>*/}
                    <Diary data='http://192.168.12.47/play/datas/diary.json' />
                </View>
            </View>
        )
    }
}

export default Fav;
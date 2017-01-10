import React, {Component} from 'react';

import {
    View,
    Dimensions
} from 'react-native';

import {sty} from '../style';

import Diary from '../components/diary';
import ScrollTab from '../components/scrollTab';
const {width} = Dimensions.get('window');

class Home extends Component {

    constructor (props) {
        super(props);
        this.state = {
            allDiary: [],
            myDiary: []
        }
    }

    componentWillMount () {
        fetch('http://192.168.12.47/play/datas/diary.json', {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    allDiary: res,
                    myDiary: res
                })
            });
    }

    render () {

        const dom = <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, width: width}}>
                <Diary navigator={this.props.navigator} data='http://192.168.12.47/play/datas/diary.json' />
            </View>
            <View style={{flex: 1, width: width}}>
                <Diary navigator={this.props.navigator} data='http://192.168.12.47/play/datas/diary.json' />
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

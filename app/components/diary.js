import React, {Component} from 'react';

import {
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

import moment from 'moment';


import {sty} from '../style';

import DiaryDetail from '../page/diary';

export default class Diary extends Component {

    constructor (props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.ds = ds;

        this.state = {
            hasDiary: false,
            count: 0,
            dataSource: ds.cloneWithRows([{}]),
            isRefreshing: false
        };

        this._onFresh = this._onFresh.bind(this);

    }

    componentWillMount () {
        this.getDiary();
    }

    getDiary (callback) {
        const ds = this.ds;

        fetch(this.props.data, {
            method: 'GET'
        })
            .then((res) => {
                // console.log(res);
                return res.json()
            })
            .then((res) => {
                // console.log(res);
                if (res.status) {
                    // console.log(res.content[0].date, moment(res.content[0].date).format('YYYY-MM-DD HH:mm'));
                    this.setState({
                        hasDiary: true,
                        dataSource: ds.cloneWithRows(res.content),
                        count: res.content.length
                    })
                } else {
                    this.setState({
                        hasDiary: false
                    })
                }

                callback && callback();

            });
    }

    _onFresh () {
        this.setState({
            isRefreshing: true
        });

        const _ = this;

        this.getDiary(() => {
            _.setState({
                isRefreshing: false
            });
        })
    }

    render () {

        if (!this.state.hasDiary) {
            return (
                <View style={{alignItems: 'center', paddingTop: 30}}><Text>加载中...</Text></View>
            )
        } else if (!this.state.count) {
            return (
                <View style={{alignItems: 'center', paddingTop: 30}}><Text>木有...</Text></View>
            )
        }

        const {navigator} = this.props;

        return (
            <ListView
                style={{flex: 1}}
                contentContainerStyle={{paddingBottom: 80}}
                dataSource={this.state.dataSource}
                automaticallyAdjustContentInsets={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onFresh}
                        tintColor="#8AABBC"
                        colors={['#F8F9FA', '#8AABBC', '#285268']}
                        progressBackgroundColor="#8AABBC"
                    />
                }
                renderRow={(rowData) =>
                    <View
                        style={sty.diary}
                        key={rowData.id}
                    >
                        <View style={sty.diaryHead}>
                            <View style={sty.diaryAvatar}>
                                <Image
                                    source={{uri: rowData.user[0].avatar}}
                                    style={sty.diaryAvatar}
                                />
                            </View>
                            <View>
                                <Text style={sty.diaryName}>{rowData.user[0].name}</Text>
                                <Text style={sty.diaryDate}>{moment(rowData.date).format('YYYY-MM-DD HH:mm')}</Text>
                            </View>
                            <Image
                                style={sty.diaryWeather}
                                source={require('image!weather2')}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                navigator.push({
                                    title: '日记',
                                    component: DiaryDetail,
                                    navigationBarHidden: false,
                                    leftButtonIcon: require('image!arrow_left'),
                                    onLeftButtonPress: () => navigator.pop()
                                })
                            }}
                        >
                            <View style={sty.diaryMain}>
                                <Text style={[sty.ft16, {lineHeight: 24}]}>{rowData.content}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={sty.diaryInfo}>
                            <View style={sty.diaryInfoItem}>
                                <Image source={require('image!ico_favorite')}/>
                                <Text style={sty.diaryInfoTxt}>12</Text>
                            </View>
                            <View style={sty.diaryInfoItem}>
                                <Image source={require('image!ico_comment')}/>
                                <Text style={sty.diaryInfoTxt}>12</Text>
                            </View>
                        </View>
                    </View>
                }
            />
        )
    }
}
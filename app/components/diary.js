import React, {Component} from 'react';

import {
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import {sty} from '../style';

import DiaryDetail from '../page/diary';

export default class Diary extends Component {

    constructor (props) {
        super(props);

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.ds = ds;

        this.state = {
            hasDiary: false,
            dataSource: ds.cloneWithRows([{}])
        }

    }

    componentWillMount () {
        const ds = this.ds;

        fetch(this.props.data, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.length) {
                    this.setState({
                        hasDiary: true,
                        dataSource: ds.cloneWithRows(res)
                    })
                } else {
                    this.setState({
                        hasDiary: false
                    })
                }


            });
    }

    render () {

        if (!this.state.hasDiary) {
            return (
                <View><Text>暂无</Text></View>
            )
        }

        const {navigator} = this.props;

        return (
            <ListView
                style={{flex: 1}}
                contentContainerStyle={{paddingBottom: 80}}
                dataSource={this.state.dataSource}
                automaticallyAdjustContentInsets={false}
                renderRow={(rowData) =>
                    <View
                        style={sty.diary}
                        key={rowData.id}
                    >
                        <View style={sty.diaryHead}>
                            <View style={sty.diaryAvatar}>
                                <Image
                                    source={{uri: 'https://unsplash.it/200/200?image=0'}}
                                    style={sty.diaryAvatar}
                                />
                            </View>
                            <View>
                                <Text style={sty.diaryName}>{rowData.name}</Text>
                                <Text style={sty.diaryDate}>{rowData.date}</Text>
                            </View>
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
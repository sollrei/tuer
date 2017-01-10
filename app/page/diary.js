import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {sty} from '../style';


export default class DiaryDetail extends Component {
    render () {
        const rowData = {
            "name": "nanoka",
            "content": "Boolean value that indicates whether the interactive pop gesture is enabled. This is useful for enabling/disabling the back swipe navigation gesture. If this prop is not provided, the default behavior is for the back swipe gesture to be enabled when the navigation .",
            "date": "2017-01-01",
            "id": 3
        };
        return (
            <ScrollView style={[sty.container, {backgroundColor: 'rgba(234,238,241, .35)'}]}>
                <View
                    style={sty.diary}
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
                    <View style={sty.diaryMain}>
                        <Text style={[sty.ft16, {lineHeight: 24}]}>{rowData.content}</Text>
                    </View>
                </View>
                <View
                    style={sty.commentItem}
                >
                    <View style={sty.commentAvatar}>
                        <Image
                            source={require('image!avatar')}
                            style={sty.commentAvatar}
                        />
                    </View>
                    <View style={sty.commentMain}>
                        <View style={sty.commentInfo}>
                            <Text style={sty.diaryName}>{rowData.name}</Text>
                            <Text style={[sty.commentDate]}>{rowData.date}</Text>
                        </View>
                        <View style={sty.comment}>
                            <Text style={[sty.ft16, {lineHeight: 24}]}>哦是真的么!!!</Text>
                            <Text style={sty.commentReply}>是啊是啊</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={sty.commentItem}
                >
                    <View style={sty.commentAvatar}>
                        <Image
                            source={require('image!avatar')}
                            style={sty.commentAvatar}
                        />
                    </View>
                    <View style={sty.commentMain}>
                        <View style={sty.commentInfo}>
                            <Text style={sty.diaryName}>{rowData.name}</Text>
                            <Text style={[sty.commentDate]}>{rowData.date}</Text>
                        </View>
                        <View style={sty.comment}>
                            <Text style={[sty.ft16, {lineHeight: 24}]}>哦是真的么!!!</Text>
                            <Text style={sty.commentReply}>是啊是啊</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
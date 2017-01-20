import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer';

import {sty} from '../style';
import url from '../config';

export default class WriteDiary extends Component {

    constructor (props) {
        super(props);

        this.state = {
            content: ''
        };

    }

    render () {

        const {user} = this.props;

        return (
            <View style={sty.container}>
                <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 80}}>
                    <TextInput
                        style={sty.writeInput}
                        autoCapitalize="none"
                        multiline={true}
                        onChangeText={(text) => this.setState({
                            content: text
                        })}
                    />
                </View>
                <TouchableOpacity
                    style={sty.writeSubmit}
                    onPress={() => {
                        const _ = this;
                        fetch(url.submitDiary, {
                            method: 'POST',
                            body: 'userid=' + '1' + '&content=' + _.state.content,
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'
                            }
                        })
                            .then()
                    }}
                >
                    <Text style={{fontSize: 20, color: '#fff'}}>发布</Text>
                </TouchableOpacity>
                <KeyboardSpacer />
            </View>
        )
    }
}
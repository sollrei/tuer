import React, {Component} from 'react';

import {
    View,
    Text,
    TabBarIOS
} from 'react-native';

import Home from './home/home';
import My from './my/my';
import Message from './message/message';
import Fav from './fav/fav';
import Write from './write/write';

class Index extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectTab: 'index'
        };
    }

    render () {

        const {navigator} = this.props;

        return (
            <View style={{flex: 1,backgroundColor: 'rgba(234,238,241, .35)'}}>
                <TabBarIOS
                    barTintColor="#fff"
                    translucent={true}
                >
                    <TabBarIOS.Item
                        title=""
                        icon={require('image!home')}
                        selectedIcon={require('image!home_select')}
                        selected={this.state.selectTab === 'index'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'index'
                            })
                        }}
                    >
                        <Home navigator={navigator} />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title=""
                        icon={require('image!message')}
                        selectedIcon={require('image!message_select')}
                        selected={this.state.selectTab === 'message'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'message'
                            })
                        }}
                    >
                        <Message />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title=""
                        icon={require('image!write')}
                        selectedIcon={require('image!write_select')}
                        selected={this.state.selectTab === 'write'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'write'
                            })
                        }}
                    >
                        <Write />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title=""
                        icon={require('image!fav')}
                        selectedIcon={require('image!fav_select')}
                        selected={this.state.selectTab === 'fav'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'fav'
                            })
                        }}
                    >
                        <Fav />
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title=""
                        icon={require('image!my')}
                        selectedIcon={require('image!my_select')}
                        selected={this.state.selectTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectTab: 'my'
                            })
                        }}
                    >
                        <My />
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
}

export default Index;
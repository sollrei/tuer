import React, {Component} from 'react';

import {
    View,
    TabBarIOS,
    NetInfo
} from 'react-native';

const NOT_NETWORK = "网络不可用，请稍后再试";

const checkNetworkState = (callback) =>{
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            callback(isConnected);
        }
    );
};

import { connect } from 'react-redux';

import {sty} from './style';
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

        checkNetworkState((isConnected) => {
            console.log('con', isConnected)
        });
    }

    render () {

        const {navigator, dispatch, user} = this.props;

        return (
            <View style={sty.container}>
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
                        <Home {...this.props} />
                    </TabBarIOS.Item>
                    {/*<TabBarIOS.Item*/}
                        {/*title=""*/}
                        {/*icon={require('image!message')}*/}
                        {/*selectedIcon={require('image!message_select')}*/}
                        {/*selected={this.state.selectTab === 'message'}*/}
                        {/*onPress={() => {*/}
                            {/*this.setState({*/}
                                {/*selectTab: 'message'*/}
                            {/*})*/}
                        {/*}}*/}
                    {/*>*/}
                        {/*<Message />*/}
                    {/*</TabBarIOS.Item>*/}
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
                        <Write {...this.props}/>
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
                        <Fav {...this.props} />
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
                        <My navigator={navigator} {...this.props}/>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const ConnectedIndex = connect(mapStateToProps)(Index);

export default ConnectedIndex;


// export default Index;
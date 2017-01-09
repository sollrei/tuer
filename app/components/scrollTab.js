import React, {Component} from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';

import {sty} from '../style';

export default class ScrollTab extends Component {

    constructor (props) {
        super(props);

        this.state = {
            segmentedValue: '',
            segmentedIndex: 0,
            width: 0,
            selectedIndex: 0,
            scrollingTo: null
        }
    }

    handleHorizontalScroll = (e) => {
        let selectedIndex = e.nativeEvent.position;
        if (selectedIndex === undefined) {
            selectedIndex = Math.round(
                e.nativeEvent.contentOffset.x / this.state.width,
            );
        }
        this.setState({
            segmentedIndex: selectedIndex
        })

    };

    render () {
        const {Content, tabs} = this.props;
        let _index = this.state.segmentedIndex;

        const tabDom = tabs.map((item, index) =>
            <View
                style={sty.headerNav}
                key={index}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        this.setState({
                            segmentedIndex: index
                        })
                    }}
                >
                    <View
                        style={_index === index ? sty.headerActiveView : {}}
                    >
                        <Text style={sty.headerTxt} >{item.label}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );

        return (
            <View style={{flex: 1}}>
                <View style={sty.header}>
                    {tabDom}
                </View>
                <ScrollView
                    contentOffset={{
                        x: this.state.width * this.state.segmentedIndex,
                        y: 0
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    directionalLockEnabled={true}
                    pagingEnabled={true}
                    bounces={false}
                    scrollsToTop={false}
                    scrollEventThrottle={100}
                    removeClippedSubviews={true}
                    onLayout={(e) => {
                        this.setState({
                            width: e.nativeEvent.layout.width
                        })
                    }}
                    onScroll={this.handleHorizontalScroll}
                >
                    {Content}
                </ScrollView>
            </View>
        )
    }


}
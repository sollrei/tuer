import React, {Component} from 'react';

import {
    View,
    Text,
    ListView,
    Image
} from 'react-native';
import {sty} from '../style';

export default class UserList extends Component {

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

        fetch('http://192.168.12.47/play/datas/user.json', {
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
        return (
            <View style={{flex: 1}}>
                <ListView
                    contentContainerStyle={sty.userList}
                    dataSource={this.state.dataSource}
                    automaticallyAdjustContentInsets={false}
                    renderRow={(rowData) =>
                        <View
                            style={sty.userItem}
                            key={rowData.id}
                        >
                            <Image
                                style={sty.userListImg}
                                source={{uri: rowData.avatar}}
                            />
                            <Text>{rowData.name}</Text>
                        </View>
                    }
                />
            </View>
        )
    }

}
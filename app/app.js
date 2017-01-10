import React, {Component} from 'react';
import {
    NavigatorIOS,
    AsyncStorage
} from 'react-native';
import ConnectedIndex from './index'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {appStore} from './store/reducer';


const cs = applyMiddleware(thunk)(createStore);

import {autoRehydrate, persistStore} from 'redux-persist';

function configureStore () {
    const store = autoRehydrate()(cs)(appStore);
    persistStore(store, {storage: AsyncStorage},() => {
        console.log('rehydration complete')});
    return store;
}

// const store = cs(appStore);
const store = configureStore();


export default class IndexNav extends Component {
    render () {
        return (
            <Provider store={store}>
                <NavigatorIOS
                    initialRoute={{
                        title: '',
                        component: ConnectedIndex
                    }}
                    style={{flex: 1}}
                    navigationBarHidden={true}
                    titleTextColor='#285268'
                    barTintColor='#fff'
                    tintColor='#8AABBC'
                    shadowHidden={true}
            />
            </Provider>
        )
    }
}

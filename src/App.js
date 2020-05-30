import React from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    return(
// purpose of store is to store data and it is the communication glue with react and redux
        <Provider store={createStore(reducers)}>
            <View style={{flex:1}}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
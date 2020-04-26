import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import History from './components/History'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  render(){
  return (
    <Provider store = {createStore(reducer)}>
      <View style={{flex:1}}>
        <AddEntry/>
      </View>
    </Provider>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

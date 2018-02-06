//first import
import React, {Component} from 'react';
import {View,Text} from 'react-native';

//import Component
import Header from './components/Header';
import Body from './components/Body';

//create class
export default class App extends Component {
  render(){
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Header title="Not To Do List" backgroundColor="yellow" />
        <Body/>
      </View>
    )
  }
}

import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default class Header extends Component {
  render() {

    return(
      <View style={{backgroundColor: "#d0d0d0"}}>
        <Text>Header</Text>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1
  }
});

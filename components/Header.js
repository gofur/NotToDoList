import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class Header extends Component {
  render() {
    const {backgroundColor,title} = this.props;

    return(
      <View style={{backgroundColor: backgroundColor}}>
        <Text>{title}</Text>
      </View>
    )
  }
}

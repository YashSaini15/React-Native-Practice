import {Text, View} from 'react-native';
import React, {Component} from 'react';

class Student extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, color: 'green'}}>Student Name: {this.props.name}</Text>
      </View>
    );
  }
}

export default Student;

import {Text, StyleSheet, View, Button, TextInput} from 'react-native';
import React, {Component} from 'react';
import Student from './Student';

export default class ClassComp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  updateName(val) {
    this.setState({name: val});
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter your name"
          onChangeText={text => this.updateName(text)}></TextInput>
        <Button title="Press Me"></Button>
        <Student name={this.state.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

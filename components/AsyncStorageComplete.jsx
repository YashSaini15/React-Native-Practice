import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// let names = [];
// let data1={name:"yash", age: '21'};
// let data2={name:"Ash", gender:'Male', age: '21'};
const AsyncStorageComplete = () => {
  // const [data, setData] = useState('');

  const saveData = async () => {
    // names.push(data);
    // let name=["name", "yash"];
    // let surname=["surname", "saini"]
    try {
      // await AsyncStorage.setItem('DATA', JSON.stringify(data1));
      // await AsyncStorage.multiSet([name, surname]);
      await AsyncStorage.setItem('name', 'yash');
      console.log('saved');
    } catch (e) {
      console.log(e, 'error message');
    }
  };
  const getData = async () => {
    try {
      // const name = await AsyncStorage.getItem('DATA');
      const name = await AsyncStorage.getItem('name');
      // console.log('name:' + JSON.parse(name));
      console.log('name:' + name);
    } catch (e) {
      console.log(e, 'error message');
    }
  };
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('name');
    } catch (e) {
      console.log(e, 'error message');
    }
  };

  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <TextInput
        placeholder="Enter Data"
        value={data}
        onChangeText={text => setData(text)}
        style={{width: '80%', height: 50, borderWidth: 1, paddingLeft: 20}}
      /> */}
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          backgroundColor: 'green',
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          saveData();
        }}>
        <Text style={{color: 'white'}}>Save Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          getData();
        }}>
        <Text style={{color: 'white'}}>Get Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          deleteData()
        }}>
        <Text style={{color: 'white'}}> Delete Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          marginTop: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          clearAll()
        }}>
        <Text style={{color: 'white'}}> Clear Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AsyncStorageComplete;

const styles = StyleSheet.create({});

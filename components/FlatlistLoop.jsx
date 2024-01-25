import {View, Text, FlatList} from 'react-native';
import React from 'react';
import UserData from './UserData';

const FlatlistLoop = () => {
  const users = [
    {
      id: 1,
      name: 'Yash',
      email: 'yash@gmail.com',
    },
    {
      id: 2,
      name: 'Rahul',
      email: 'abc@gmail.com',
    },
    {
      id: 3,
      name: 'Raju',
      email: 'abc@test.com',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 27}}>Component in Loop with Flatlist</Text>
      <FlatList data={users} renderItem={({item}) => <UserData item={item}/>} />
    </View>
  );
};

export default FlatlistLoop;

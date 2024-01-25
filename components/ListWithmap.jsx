import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const ListWithmap = () => {
  const users = [
    {
      id: 1,
      name: 'Yash',
    },
    {
      id: 2,
      name: 'Rahul',
    },
    {
      id: 3,
      name: 'Raju',
    },
    {
      id: 4,
      name: 'Babu',
    },
    {
      id: 5,
      name: 'John',
    },
    {
      id: 6,
      name: 'Roy',
    },
    {
      id: 7,
      name: 'Jack',
    },
    {
      id: 8,
      name: 'Tom',
    },
    {
      id: 9,
      name: 'Neymar',
    },
    {
      id: 10,
      name: 'Liam',
    },
    {
      id: 11,
      name: 'Sam',
    },
    {
      id: 12,
      name: 'Ram',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 35}}>List with map function</Text>
      <ScrollView style={{marginBottom: 100}}>
        {users.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: 'blue',
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default ListWithmap;

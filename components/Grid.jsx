import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Grid = () => {
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
        {
          id: 13,
          name: 'Pam',
        },
        {
          id: 14,
          name: 'Jim',
        },
        {
          id: 15,
          name: 'Tim',
        },
        {
          id: 16,
          name: 'Dim',
        },
        {
          id: 17,
          name: 'Tam',
        },
        {
          id: 18,
          name: 'Fan',
        },
      ];    
  return (
    <View>
      <Text style={{fontSize: 31}}>Grid with Dynamic data</Text>
        <ScrollView style={{marginBottom: 100}}>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {
            users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
      </View>
        </ScrollView>
    </View>
  );
};

export default Grid;

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

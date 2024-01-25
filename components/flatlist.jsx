import React from 'react'
import {Text, View, FlatList, StyleSheet} from 'react-native';

const Flatlist = () => {
    const users = [
        {
          id: 1,
          name: 'Yash',
        },
        {
          id: 2,
          name: 'jay',
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
      ];
  return (
    <View>
    <Text style={{fontSize: 30}}>List with flat list components</Text>
    <FlatList
    data={users}
    renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
    keyExtractor={item=>item.id}
    />
  </View>
  ) 
}
const styles = StyleSheet.create({
    item:{
      fontSize:24,
      padding:10,
      color:'blue',
      backgroundColor:'gray',
      borderColor:"black",
      borderWidth:1,
      margin:10
    }
})

export default Flatlist
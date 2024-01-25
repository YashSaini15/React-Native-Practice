import {StyleSheet, Text, View, SectionList} from 'react-native';
import React from 'react';

const SectionListA = () => {
  const users = [
    {
      id: 1,
      name: 'Anil',
      data: ['PHP', 'React js', 'Angular'],
    },
    {
      id: 2,
      name: 'Peter',
      data: ['React', 'Python', 'React-Native'],
    },
    {
      id: 3,
      name: 'Jim',
      data: ['React', 'C', 'React-Native'],
    },
    {
      id: 4,
      name: 'Pam',
      data: ['Java', 'Python', 'React-Native'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize:32}}>Section List</Text>
      <SectionList
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=><Text style={{fontSize:25,color:'blue'}}>{name}</Text>}
      />
    </View>
  );
};

export default SectionListA;

const styles = StyleSheet.create({});

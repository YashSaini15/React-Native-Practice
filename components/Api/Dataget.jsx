import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Dataget = () => {
  const [data, setData] = useState(undefined);
  const getAPIData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <Text style={{fontSize:30}}>API Call</Text>
      {
        data ? <View>
          <Text style={{fontSize:30}}>id: {data.id}</Text>
          <Text style={{fontSize:30}}>User ID: {data.userId}</Text>
          <Text style={{fontSize:30}}>title: {data.title}</Text>
          <Text style={{fontSize:30}}>body: {data.body}</Text>
        </View>:null
      }
    </View>
  );
};

export default Dataget;

const styles = StyleSheet.create({});

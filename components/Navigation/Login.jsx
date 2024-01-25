import {useState} from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';
export const Login = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <TextInput
        style={{fontSize: 20, borderColor: '#000', borderWidth: 2}}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
      />
      <TextInput
        style={{fontSize: 20, borderColor: '#000', borderWidth: 2}}
        onChangeText={text => setAge(text)}
        placeholder="Enter Age"
      />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}></Button>
    </View>
  );
};

import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Login } from './Login';
import { Home } from './Home';
const Stack = createNativeStackNavigator();
const StackNav = () => {
  const btnAction=()=>{
    console.warn("Button Pressed");
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: 'red'},
            headerTintColor:'white',
            headerTitleStyle: {fontSize: 25},
          }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle:()=><Button onPress={btnAction} title='Left'/>,
            headerRight:()=><Header />,
            title:"User Login",
            headerStyle: {backgroundColor: 'skyblue'},
            headerTintColor:'red',
            headerTitleStyle: {fontSize: 30},
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () =>{
  return(<Button title='btn'></Button>)
}

export default StackNav;

const styles = StyleSheet.create({
});

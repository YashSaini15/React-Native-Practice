import { Text, Button, View, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel:true,
        tabBarActiveTintColor:'black',
        tabBarLabelStyle:{fontSize:15, fontWeight:'bold'},
        tabBarInactiveTintColor:'grey',
        tabBarActiveBackgroundColor:'lightblue'
      }}>
        <Tab.Screen name='Login' component={Login} options={{
          tabBarIcon:()=>(
            <Entypo name="login" size={25} color='red' />
          )
        }} />
        <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon:()=>(
            <Fontisto name="home" size={25} color='red'/>
          )
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon:()=>(
            <AntDesign name='profile' size={25} color='red'/>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Login = () => {
  return <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:40}}>Login</Text>
  </View>
}

const Home = () => {
  return <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:40}}>Home</Text>
  </View>
}

const Profile = () => {
  return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  <Text style={{fontSize:40}}>Profile</Text>
  </View>
}
export default TabNav

const styles = StyleSheet.create({})
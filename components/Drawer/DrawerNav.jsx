import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Dashboard' component={Dashboard} />
        <Drawer.Screen name='Settings' component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNav

const Dashboard = ({navigation}) => {
  return ( <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:40}}>Dashboard</Text>
  </View>
  )
}

const Settings = () => {
  return ( <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:40}}>Settings</Text>
  </View>
  )
}

const styles = StyleSheet.create({})
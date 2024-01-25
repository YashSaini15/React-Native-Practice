import { StyleSheet, Text, View, StatusBar, Button } from 'react-native'
import React, { useState } from 'react'

const Status = () => {
  const [hide, setHide] = useState(false)
  const [barStyle, setBarStyle] = useState('default')
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor={"red"}
      barStyle={barStyle}
      hidden={hide}
      >
      </StatusBar>
      <Button title="Toogle Status Bar" onPress={()=>setHide(!hide)}></Button>
      <Button title="Update Style" onPress={()=>setBarStyle("dark-content")}></Button>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})
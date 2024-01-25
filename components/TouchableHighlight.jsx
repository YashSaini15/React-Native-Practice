import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const TouchableHighlightBtn = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
      <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
      <Text style={[styles.button, styles.warning]}>Warning</Text>
      </TouchableHighlight>
    </View>
  )
}

export default TouchableHighlightBtn

const styles = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:'#bbb',
    color:'#fff',
    fontSize:24,
    textAlign:'center',
    margin:10,
    padding:10,
    borderRadius:10,
    shadowColor:'black',
    elevation:10,
    shadowOpacity:.5
  },
  success:{
    backgroundColor:'green'
  },
  primary:{
    backgroundColor:'blue'
  },
  error:{
    backgroundColor:'gold'
  },
  warning:{
    backgroundColor:'red'
  }

})
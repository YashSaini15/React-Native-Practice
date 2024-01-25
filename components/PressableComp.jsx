import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const PressableComp = () => {
  return (
    <View style={styles.main}>
      <Pressable
      // onPress={()=>console.warn("normal on press")}
      // onLongPress={()=>console.warn("Long Press")}
      onPressIn={()=>console.warn("Press in")}
      onPressOut={()=>console.warn("Press out")}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center'
  },
  pressableBtn:{
    backgroundColor:'blue',
    color:'#fff',
    margin:10,
    padding:10,
    borderRadius:10,
    fontSize:20,
    textAlign:'center',
    shadowColor:'#000',
    elevation:5
  }
});

export default PressableComp;

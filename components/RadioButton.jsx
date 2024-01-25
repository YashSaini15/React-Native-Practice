import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

const RadioButton = () => {
  const [selectedRadio, setSelectedRadio] = useState(1)
  
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedRadio===1?  <View style={styles.radioBg}></View>:null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
          {
              selectedRadio===2?  <View style={styles.radioBg}></View>:null
          }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: 'orange'
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg:{
    backgroundColor:'green',
    height:28,
    width:28,
    borderRadius:20,
    margin:4
  }
});

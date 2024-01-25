import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const DynamicRadio = () => {
  const skills = [
    {
      id: 1,
      name: 'JAVA',
    },
    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'React',
    },
    {
      id: 4,
      name: 'C',
    },
    {
      id:5,
      name: 'Python'
    }
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DynamicRadio;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'left',
    left:125,
    justifyContent: 'center',

  },
  radioText: {
    fontSize: 20,
    color: 'orange',
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
  radioBg: {
    backgroundColor: 'green',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});

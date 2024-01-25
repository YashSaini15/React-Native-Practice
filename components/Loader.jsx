import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  const [show, setShow] = useState(false);
  displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 5000);
  };
  return (
    <View style={styles.main}>
      {/* <ActivityIndicator size={100} color={'red'} />
      <ActivityIndicator size={'small'} color={'blue'} /> */}
      <ActivityIndicator size={100} color={'blue'} animating={show} />
      {
        show ? <ActivityIndicator size={70} color={'red'} /> : null
      }
      <Button title="show loader" onPress={displayLoader}></Button>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

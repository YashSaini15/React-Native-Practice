import {StyleSheet, Text, View, Button, Modal} from 'react-native';
import React, { useState } from 'react';

const Modals = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textModal}>Hello World</Text>
            <Button title="Close Modal" onPress={()=>setShowModal(false)}></Button>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={()=>setShowModal(true)}></Button>
      </View>
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  textModal: {
    fontSize: 30,
    marginBottom: 20,
  },
});

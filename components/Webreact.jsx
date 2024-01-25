import { StyleSheet, Text, View } from 'react-native'
import {WebView} from 'react-native-webview'
import React from 'react'

const Webreact = () => {
  return (
   <WebView source={{uri:"https://reactnative.dev/docs/platform"}}/>
  )
}

export default Webreact

const styles = StyleSheet.create({})
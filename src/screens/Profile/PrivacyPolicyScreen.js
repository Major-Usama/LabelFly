import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderBack from '../../components/HeaderBack'

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
  <HeaderBack 
  title="Privacy Policy"
  />
    </View>
  )
}

const styles = StyleSheet.create({

    container:
    {
        flex:1,
        backgroundColor:'#fff',
    }

})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text
      style={styles.servicesText}
      >Comming Soon</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:"center",
    alignItems:"center"
  },
  servicesText:
  {
    fontSize:20,
    fontFamily:'SemiBold',
  }

})
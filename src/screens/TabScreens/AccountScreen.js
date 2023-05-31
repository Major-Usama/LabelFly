import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

export default function AccountScreen() {
  return (
    <View style={styles.container}>
     <View style={styles.activityHeaderContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/logosmall.png")}
        />

        <Text style={styles.activityText}>Activity</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container:
  {
    flex:1,
    backgroundColor:'#fff',
  },
  activityHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFValue(20),
    marginTop: RFValue(54),
  },
  logo: {
    width:RFValue(28), 
    height: RFValue(28),
    marginRight: RFValue(14),
  },
  activityText: {
    fontSize: RFValue(21),
    color: "#212121",
    fontFamily: "Bold",
  },
})
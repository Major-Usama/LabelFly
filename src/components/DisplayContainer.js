import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function DisplayContainer() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.individualItemContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/Homeicons/sendp.png")}
        />

        <Text style={styles.title}>Send{"\n"}package</Text>
      </View>

      <View style={styles.individualItemContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/Homeicons/schedule.png")}
        />

        <Text style={styles.title}>Schedule</Text>
      </View>

      <View style={styles.individualItemContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/Homeicons/track.png")}
        />

        <Text style={styles.title}>Track</Text>
      </View>

      <View style={styles.individualItemContainer}>
        <Image
          style={styles.icon}
          source={require("../assets/icons/Homeicons/history.png")}
        />

        <Text style={styles.title}>History</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop:RFValue(20)
  },

  individualItemContainer: {
    alignItems: "center",
    height: RFValue(105),
  },
  icon: {
    width: 81,
    height: 70,
    borderRadius: 12,
    alignSelf: "center",
  },
  title: {
    fontSize: RFValue(13),
    color: "#212121",
    fontFamily: "SemiBold",
    marginTop: 12,
    textAlign:'center'
  },
});

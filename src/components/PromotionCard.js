import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const { width } = Dimensions.get("window");

export default function PromotionCard(props) {
  return (
    <View style={{ ...styles.cardMainContainer, marginRight: props.margin }}>
      <Image
        style={{
          ...styles.promotionImage,
          width: props.width,
          height: props.height,
        }}
        source={props.image}
      />

      <View style={styles.promotionTextMainContainer}>
        <View style={styles.promotionArrowContainer}>
          <Text style={styles.promotionText}>Promotion</Text>
          <Image
            style={styles.arrow}
            source={require("../assets/icons/Homeicons/arrow-right.png")}
          />
        </View>

        <Text style={styles.desc}>Know more about our Ramadan promo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardMainContainer: {
    alignSelf: "center",
    marginTop: RFValue(20),
  },
  promotionImage: {
    width: width - 40,
    height: RFValue(170),
    borderRadius: 16,
  },
  promotionArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  promotionText: {
    color: "#212121",
    fontFamily: "Bold",
    fontSize: RFValue(16),
    marginRight: 16,
  },
  arrow: {
    width: 24,
    height: 24,
  },
  desc: {
    fontSize: RFValue(12),
    color: "#757575",
    fontFamily: "Medium",
    marginTop: 6,
  },
  promotionTextMainContainer: {
    // marginLeft: RFValue(20),
    marginTop: 16,
  },
});

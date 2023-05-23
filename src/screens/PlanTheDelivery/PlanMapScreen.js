import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import MapBottomSheet from '../../components/MapBottomSheet';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 25.2048; // Dubai Mall latitude
const LONGITUDE = 55.2708; // Dubai Mall longitude
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CustomMarker = ({ title }) => {
  return (
    <View style={styles.customMarkerContainer}>
      <View style={styles.customMarker}>
        <Text style={styles.customMarkerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const PlanMapScreen = () => {
  // Your address coordinates (JW Marriott Marquis Hotel Dubai)
  const addressLatitude = 25.1864;
  const addressLongitude = 55.2635;

  // Destination (Dubai Mall) coordinates
  const destinationLatitude = 25.2048;
  const destinationLongitude = 55.2708;

  // Delivery route coordinates
  const routeCoordinates = [
    { latitude: addressLatitude, longitude: addressLongitude },
    { latitude: 25.1950, longitude: 55.2669 }, // Custom coordinate along the road
    { latitude: destinationLatitude, longitude: destinationLongitude },
  ];

  // Splitting the coordinates for two polylines
  const polyline1 = routeCoordinates.slice(0, 2);
  const polyline2 = routeCoordinates.slice(1, 3);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {/* Destination Marker with Custom View Label */}
        <Marker
          coordinate={{ latitude: destinationLatitude, longitude: destinationLongitude }}
        >
          <CustomMarker title="Dubai Mall : 10 Min" />
        </Marker>

        {/* Your Address Marker with Custom View Label */}
        <Marker
          coordinate={{ latitude: addressLatitude, longitude: addressLongitude }}
        >
          <CustomMarker title="Your Address" />
        </Marker>

        {/* First Polyline */}
        <Polyline
          coordinates={polyline1}
          strokeWidth={8}
          strokeColor="#101010"
          geodesic
        />

        {/* Second Polyline */}
        <Polyline
          coordinates={polyline2}
          strokeWidth={8}
          strokeColor="#9E9E9E"
          geodesic
        />
      </MapView>
      <MapBottomSheet  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  customMarkerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customMarker: {
    backgroundColor: '#0C4DA2',
    paddingHorizontal:8,
    paddingVertical:8,
    borderRadius: 24,
  },
  customMarkerTitle: {
    color: 'white',
    fontFamily:'Regular',
    fontSize:RFValue(12)
  },
});

export default PlanMapScreen;

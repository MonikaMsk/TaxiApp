import {useEffect, useRef, useState} from 'react';
import type {UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from 'utils/Constants';

export const useMapScreen = () => {
  //map reference to center it based on the user location
  const mapRef = useRef<MapView>(null);

  // user location state
  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent['nativeEvent']['coordinate']>();

  useEffect(() => {
    if (userLocation) {
      mapRef?.current?.animateToRegion({
        longitude: userLocation.longitude,
        latitude: userLocation.latitude,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA,
      });
    }
  }, [userLocation]);


  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    setUserLocation(coordinate);
  };

  // custom hook returns object
  return {
    models: {mapRef},
    operations: {handleUserLocationChange},
  };
};

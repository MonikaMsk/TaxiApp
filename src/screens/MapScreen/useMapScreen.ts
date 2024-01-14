import {useEffect, useRef, useState} from 'react';
import type {UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from 'utils/Constants';

export const useMapScreen = () => {
  //map reference to center it based on the user location
  const mapRef = useRef<MapView>(null);

  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent['nativeEvent']['coordinate']>();
  const [modalVisible, setModalVisible] = useState(false);

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

  const closeMapModal = () => {
    setModalVisible(false);
  };

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    setUserLocation(coordinate);
  };

  const handleMapSearchBarPress = () => {
    setModalVisible(true);
  };

  return {
    models: {mapRef, modalVisible},
    operations: {handleUserLocationChange, handleMapSearchBarPress, closeMapModal},
  };
};

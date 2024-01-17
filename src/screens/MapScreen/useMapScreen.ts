import {useUserLocationContext} from 'context/UserLocationContext';
import {useEffect, useRef, useState} from 'react';
import type {UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from 'utils/Constants';

export const useMapScreen = () => {
  //map reference to center it based on the user location
  const mapRef = useRef<MapView>(null);

  const [modalVisible, setModalVisible] = useState(false);

  const {userLocation, setUserLocation} = useUserLocationContext();

  useEffect(() => {
    if (userLocation) {
      mapRef?.current?.animateToRegion({
        longitude: userLocation.coordinates.longitude,
        latitude: userLocation.coordinates.latitude,
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
    if(coordinate){
      setUserLocation({
        coordinates: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        }
      })
    }
  };

  const handleMapSearchBarPress = () => {
    setModalVisible(true);
  };

  return {
    models: {mapRef, modalVisible},
    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeMapModal,
    },
  };
};

import {useUserLocationContext} from 'context/UserLocationContext';
import {useCallback, useEffect, useRef, useState} from 'react';
import type {LatLng, UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from 'utils/Constants';

export const useMapScreen = () => {
  //map reference to center it based on the user location
  const mapRef = useRef<MapView>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [mapMarkers, setMapMarkers] = useState<LatLng[] | []>([]);
  const {userLocation, setUserLocation} = useUserLocationContext();

  const showUserLocation = useCallback(() => {
    if (userLocation) {
      mapRef?.current?.animateToRegion({
        longitude: userLocation.coordinates.longitude,
        latitude: userLocation.coordinates.latitude,
        longitudeDelta: LONGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA,
      });
    }
  }, [userLocation]);

  useEffect(() => {
    showUserLocation();
  }, []);

  const closeMapModal = () => {
    setModalVisible(false);
  };

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    if (coordinate) {
      setUserLocation({
        coordinates: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        },
      });
    }
  };

  const handleMapSearchBarPress = () => {
    setModalVisible(true);
  };

  const handleResultItemPress = (coordinates: LatLng) => {
    return () => {
      if (userLocation?.coordinates) {
        setMapMarkers([userLocation?.coordinates, coordinates]);
        setModalVisible(false);
      }
    };
  };

  return {
    models: {
      mapRef,
      modalVisible,
      mapMarkers,
    },

    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeMapModal,
      handleResultItemPress,
    },
  };
};

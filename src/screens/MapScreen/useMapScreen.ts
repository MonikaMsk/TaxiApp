import {useUserLocationContext} from 'context/UserLocationContext';
import {useCallback, useEffect, useRef, useState} from 'react';
import type {LatLng, UserLocationChangeEvent} from 'react-native-maps';
import type MapView from 'react-native-maps';
import {MapDirectionsResponse} from 'react-native-maps-directions';
import {scale} from 'react-native-size-matters';
import {LATITUDE_DELTA, LONGITUDE_DELTA, insets} from 'utils/Constants';

export const useMapScreen = () => {
  //map reference to center it based on the user location
  const mapRef = useRef<MapView>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [mapMarkers, setMapMarkers] = useState<LatLng[] | []>([]);
  const {userLocation, setUserLocation} = useUserLocationContext();
  const [mapDirections, setMapDirections] = useState<MapDirectionsResponse>();

  const isRouteVisible = mapMarkers.length === 2;

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

    if (mapDirections?.coordinates) {
      mapRef.current?.fitToCoordinates(mapDirections?.coordinates, {
        edgePadding: {
          top: insets.top + scale(15),
          bottom: scale(15),
          left: scale(15),
          right: scale(15),
        },
      });
    }
  }, [showUserLocation, mapDirections?.coordinates]);

  const closeMapModal = () => {
    setModalVisible(false);
  };

  const handleUserLocationChange = ({
    nativeEvent: {coordinate},
  }: UserLocationChangeEvent) => {
    if (coordinate && !isRouteVisible && !modalVisible) {
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

  const handleMapDirectionsReady = (routeInfo: MapDirectionsResponse) => {
    setMapDirections(routeInfo);
  };

  const handleRoundButtonPress = () => {
    if (isRouteVisible) {
      setMapMarkers([]);
      showUserLocation();
    }
  };

  return {
    models: {
      mapRef,
      modalVisible,
      mapMarkers,
      isRouteVisible,
    },

    operations: {
      handleUserLocationChange,
      handleMapSearchBarPress,
      closeMapModal,
      handleResultItemPress,
      handleMapDirectionsReady,
      handleRoundButtonPress,
    },
  };
};

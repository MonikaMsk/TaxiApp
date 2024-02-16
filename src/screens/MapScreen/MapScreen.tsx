import { SafeAreaView, StyleSheet } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useMapScreen } from "./useMapScreen"
import { RoundButton } from "components/RoundButton";
import { SearchBar } from "components/SearchBar";
import { MapModal } from "components/MapModal/MapModal";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { colours } from "theme/Theme";
import { ChooseRideBottomSheet } from "components/BottomSheet/ChooseRideBottomSheet";

export const MapScreen = (): React.JSX.Element => {

  const { models, operations } = useMapScreen();

  const renderMapMarkers = () => {
    return models.mapMarkers.map((item, index) => {
      return <Marker coordinate={item} key={index} />
    })
  }

  return (
    <SafeAreaView style={styles.mapContainer}>
      <MapView
        ref={models.mapRef}
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsCompass={false}
        showsMyLocationButton={false}>
        {renderMapMarkers()}
        <MapViewDirections
          origin={models.mapMarkers[0]}
          destination={models.mapMarkers[1]}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={5}
          strokeColor={colours.map.directionStroke}
          onReady={operations.handleMapDirectionsReady}
        />
      </MapView>
      <RoundButton
        onPress={operations.handleRoundButtonPress}
        iconName={models.isRouteVisible ? "arrow-back-outline" : "menu-outline"} />
      {
        models.isRouteVisible || models.modalVisible ? null : (<SearchBar onPress={operations.handleMapSearchBarPress} />)
      }
      <MapModal
        closeModal={operations.closeMapModal}
        visible={models.modalVisible}
        onResultItemPress={operations.handleResultItemPress} />

      {models.isRouteVisible ? <ChooseRideBottomSheet onChange={operations.handleBottomSheetPosition} mapDirections={models.mapDirections}/> : null}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1,
  }
})





import { SafeAreaView, StyleSheet } from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { useMapScreen } from "./useMapScreen"
import { RoundButton } from "components/RoundButton";
import { SearchBar } from "components/SearchBar";
import { MapModal } from "components/MapModal/MapModal";

export const MapScreen = (): React.JSX.Element => {

  const { models, operations } = useMapScreen();

  const renderMapMarkers = () => {
    return models.mapMarkers.map((item, index) => {
      console.log(item);
      
      return <Marker coordinate={item} key={index} />
    })
  }

  return (
    <SafeAreaView style={styles.mapContainer}>
      <MapView
        ref={models.mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsCompass={false}
        showsMyLocationButton={false}>
        {renderMapMarkers()}
      </MapView>
      <RoundButton iconName="menu-outline" />
      <SearchBar onPress={operations.handleMapSearchBarPress} />
      <MapModal
        closeModal={operations.closeMapModal}
        visible={models.modalVisible}
        onResultItemPress={operations.handleResultItemPress} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})





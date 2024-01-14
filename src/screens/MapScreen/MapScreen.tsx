import { SafeAreaView, StyleSheet } from "react-native"
import MapView, { PROVIDER_GOOGLE } from "react-native-maps"
import { useMapScreen } from "./useMapScreen"
import { RoundButton } from "components/RoundButton";
import { SearchBar } from "components/SearchBar";
import { MapModal } from "components/MapModal";

export const MapScreen = (): React.JSX.Element => {

  const { models, operations } = useMapScreen();

  return (
    <SafeAreaView style={styles.mapContainer}>
      <MapView
        ref={models.mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        onUserLocationChange={operations.handleUserLocationChange}
        showsCompass={false}
        showsMyLocationButton={false} />
      <RoundButton iconName="menu-outline"/>
      <SearchBar onPress={operations.handleMapSearchBarPress}/>
      <MapModal  closeModal={operations.closeMapModal} visible={models.modalVisible}/>
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





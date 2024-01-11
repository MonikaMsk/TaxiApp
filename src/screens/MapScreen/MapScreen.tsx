import { StyleSheet } from "react-native"
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"
import { useMapScreen } from "./useMapScreen"

export const MapScreen = (): React.JSX.Element => {

const {models, operations} = useMapScreen();

  return (
      <MapView 
      ref={models.mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      onUserLocationChange={operations.handleUserLocationChange}
      showsCompass={false}
      showsMyLocationButton={false} />
  )
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})
    
    



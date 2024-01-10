import { StyleSheet } from "react-native"
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"

export const MapScreen = (): React.JSX.Element => {

    
  return (
 
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
  
  )


}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})
    
    



import { SafeAreaView, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { MapScreen } from "screens/MapScreen/MapScreen";


export const App = () => {


  return (
      <MapScreen />
  
  )


}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
})



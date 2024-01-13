import React from "react";
import { MapScreen } from "screens/MapScreen/MapScreen";
import { LocationPermission } from "services/LocationPermissionService";
import {SafeAreaProvider} from 'react-native-safe-area-context'

export const App = (): React.JSX.Element => {

  return (
    <SafeAreaProvider>
      <MapScreen />
      <LocationPermission />
    </SafeAreaProvider>
  )
}





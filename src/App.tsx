import React from "react";
import { MapScreen } from "screens/MapScreen/MapScreen";
import { LocationPermission } from "services/LocationPermissionService";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { UserLocationContextProvider } from "context/UserLocationContext";

export const App = (): React.JSX.Element => {

  return (
    <SafeAreaProvider>
      <UserLocationContextProvider>
        <MapScreen />
        <LocationPermission />
      </UserLocationContextProvider>
    </SafeAreaProvider>
  )
}





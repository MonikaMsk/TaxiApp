import React from "react";
import { MapScreen } from "screens/MapScreen/MapScreen";
import { LocationPermission } from "services/LocationPermissionService";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { UserLocationContextProvider } from "context/UserLocationContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const App = (): React.JSX.Element => {

  return (
     <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <UserLocationContextProvider>
          <MapScreen />
          <LocationPermission />
        </UserLocationContextProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}





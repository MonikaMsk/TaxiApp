import React from "react";
import { MapScreen } from "screens/MapScreen/MapScreen";
import { LocationPermission } from "services/LocationPermissionService";


export const App = (): React.JSX.Element => {

  return (
    <>
      <MapScreen />
      {/* <LocationPermission /> */}
    </>
  )
}





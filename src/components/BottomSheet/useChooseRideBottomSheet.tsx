import { useState } from "react";
import { RideItem } from "types/rideItem";
import { rideData } from "./mockData";

export const useChooseRideBottomSheet = () => {
    const [selectedRide, setSelectedRide] = useState<RideItem>(rideData[0].data[0]);

    const handleRideItemPress = (item:RideItem) => {
        return () => {
            setSelectedRide(item)
        }
    }

    return {
        models: {selectedRide},
        operations: {handleRideItemPress},
    };
}
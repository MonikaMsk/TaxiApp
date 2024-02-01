import { useState } from "react";
import { RideItem } from "types/rideItem";
import { rideData } from "./mockData";

type useChooseRideBottomSheet = {
    onChange: (index: number) => void
}

export const useChooseRideBottomSheet = ({onChange}: useChooseRideBottomSheet) => {
    const [selectedRide, setSelectedRide] = useState<RideItem>(rideData[0].data[0]);

    const [snapIndex, setSnapIndex] = useState(1);

    const handleRideItemPress = (item: RideItem) => {
        return () => {
            setSelectedRide(item)
        }
    }

    const handleBottomSheetChange = (index: number) => {
        setSnapIndex(index);
        onChange(index);
    }

    return {
        models: { selectedRide, snapIndex },
        operations: { handleRideItemPress, handleBottomSheetChange },
    };
}
import { useState, useEffect } from "react";
import { RideItem } from "types/rideItem";
import { rideData } from "./mockData";
import { useSharedValue } from "react-native-reanimated";
import { scale } from "react-native-size-matters";

type useChooseRideBottomSheet = {
    onChange: (index: number) => void
}

export const useChooseRideBottomSheet = ({ onChange }: useChooseRideBottomSheet) => {
    const [selectedRide, setSelectedRide] = useState<RideItem>(rideData[0].data[0]);

    const [snapIndex, setSnapIndex] = useState(1);
    const footerOffset = useSharedValue(0)

    const isItemExpanded = snapIndex === 2;

    useEffect(() => {
        if (isItemExpanded) {
            footerOffset.value = scale(200)
        } else {
            footerOffset.value = 0;
        }
    }, [footerOffset, isItemExpanded])

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
        models: { selectedRide, snapIndex, isItemExpanded, footerOffset },
        operations: { handleRideItemPress, handleBottomSheetChange },
    };
}
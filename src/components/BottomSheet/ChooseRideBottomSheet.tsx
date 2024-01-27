import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet"
import { snapPoints } from "utils/Constants"
import { rideData } from "./mockData"
import { ChooseRideItem } from "./components/ChooseRideItem"



type ChooseRideBottomSheetProps = {
    onChange: (index: number) => void
}


export const ChooseRideBottomSheet = ({ onChange }: ChooseRideBottomSheetProps) => {
    const renderSectionItem = () => {
        return <ChooseRideItem />
    }


    return (
        <BottomSheet index={1} onChange={onChange} snapPoints={snapPoints}>
            <BottomSheetSectionList 
           renderItem={renderSectionItem} sections={rideData} />
        </BottomSheet>
    )

}

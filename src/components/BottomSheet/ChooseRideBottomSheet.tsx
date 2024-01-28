import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet"
import { snapPoints } from "utils/Constants"
import { rideData } from "./mockData"
import { ChooseRideItem } from "./components/ChooseRideItem"
import { SectionListRenderItem } from "react-native"
import { RideItem } from "types/rideItem"
import { calculateRidePrice } from "utils/calculateRidePrice"
import { MapDirectionsResponse } from "react-native-maps-directions"



type ChooseRideBottomSheetProps = {
    onChange: (index: number) => void
    mapDirections?: MapDirectionsResponse
}


export const ChooseRideBottomSheet = ({ onChange, mapDirections }: ChooseRideBottomSheetProps) => {
    const renderSectionItem: SectionListRenderItem<RideItem> = ({item}) => {
        return <ChooseRideItem 
        key={item.id}
        title={item.type}
        price={calculateRidePrice(item.price, mapDirections)}
        description={item.description}
        eta={item.eta}
        maxPassangers={item.maxPassangers}
        selected={item.id === '1'}
        onPress={() => {}}
        variant={"compact"} />
    }


    return (
        <BottomSheet index={1} onChange={onChange} snapPoints={snapPoints}>
            <BottomSheetSectionList 
           renderItem={renderSectionItem} sections={rideData} />
        </BottomSheet>
    )

}

import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet"
import { snapPoints } from "utils/Constants"
import { rideData } from "./mockData"
import { ChooseRideItem } from "./components/ChooseRideItem"
import { SectionListData, SectionListRenderItem } from "react-native"
import { RideItem } from "types/rideItem"
import { calculateRidePrice } from "utils/calculateRidePrice"
import { MapDirectionsResponse } from "react-native-maps-directions"
import { useChooseRideBottomSheet } from "./useChooseRideBottomSheet"
import { Header } from "components/BottomSheet/components/Header"
import { SectionHeader } from "./components/SectionHeader"



type ChooseRideBottomSheetProps = {
    onChange: (index: number) => void
    mapDirections?: MapDirectionsResponse
}




export const ChooseRideBottomSheet = ({ onChange, mapDirections }: ChooseRideBottomSheetProps) => {
    const { models, operations } = useChooseRideBottomSheet();


    const renderSectionHeader = ({ section }: { section: SectionListData<RideItem> }) => {
        return <SectionHeader title={section.title} />
    }



    const renderSectionItem: SectionListRenderItem<RideItem> = ({ item }) => {
        return <ChooseRideItem
            key={item.id}
            title={item.type}
            price={calculateRidePrice(item.price, mapDirections)}
            description={item.description}
            eta={item.eta}
            maxPassangers={item.maxPassangers}
            selected={item.id === models.selectedRide.id}
            onPress={operations.handleRideItemPress(item)}
            variant={"compact"} />
    }


    return (
        <BottomSheet index={1} onChange={onChange} snapPoints={snapPoints}>
            <BottomSheetSectionList
                ListHeaderComponent={<Header />}
                renderItem={renderSectionItem}
                sections={rideData}
                renderSectionHeader={renderSectionHeader}
                stickySectionHeadersEnabled={false}
            />
        </BottomSheet>
    )

}

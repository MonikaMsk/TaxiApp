import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet"
import { snapPoints } from "utils/Constants"
import { rideData } from "./mockData"
import { ChooseRideItem } from "./components/ChooseRideItem"
import { SectionListData, SectionListRenderItem, View } from "react-native"
import { RideItem } from "types/rideItem"
import { calculateRidePrice } from "utils/calculateRidePrice"
import { MapDirectionsResponse } from "react-native-maps-directions"
import { useChooseRideBottomSheet } from "./useChooseRideBottomSheet"
import { Header } from "components/BottomSheet/components/Header"
import { SectionHeader } from "./components/SectionHeader"
import { Footer } from "components/Footer"
import { insets } from "utils/Constants"


type ChooseRideBottomSheetProps = {
    onChange: (index: number) => void
    mapDirections?: MapDirectionsResponse
}


export const ChooseRideBottomSheet = ({ onChange, mapDirections }: ChooseRideBottomSheetProps) => {
    const { models, operations } = useChooseRideBottomSheet({ onChange });



    const renderSectionHeader = ({ section }: { section: SectionListData<RideItem> }) => {
        return models.isItemExpanded ? <SectionHeader title={section.title} /> : null
    }



    const renderSectionItem: SectionListRenderItem<RideItem> = ({ item }) => {
        return <ChooseRideItem
            key={item.id}
            variant={models.isItemExpanded ? "expanded" : "compact"}
            title={item.type}
            price={calculateRidePrice(item.price, mapDirections)}
            description={item.description}
            eta={item.eta}
            maxPassengers={item.maxPassengers}
            selected={item.id === models.selectedRide.id}
            onPress={operations.handleRideItemPress(item)}
        />
    }


    return (
        <>
            <BottomSheet index={1} onChange={operations.handleBottomSheetChange} snapPoints={snapPoints(insets)}>
                <BottomSheetSectionList
                    ListHeaderComponent={<Header />}
                    renderItem={renderSectionItem}
                    sections={rideData}
                    renderSectionHeader={renderSectionHeader}
                    stickySectionHeadersEnabled={false}
                />
            </BottomSheet>
            <Footer selectedRide={models.selectedRide} offset={models.footerOffset} />
        </>
    )

}

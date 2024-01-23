
import { FlatList, Modal, StyleSheet, View } from "react-native"
import { RoundButton } from "../RoundButton";
import { FlatListHeader } from "./components/FlatListHeader";
import { useMapModal } from "./useMapModal";
import { ResultItem } from "components/ResultItem";
import { TextSearchItem } from "models/types/TextSearchItem";
import { Spacer } from "components/Spacer";
import { scale } from "react-native-size-matters";
import { insets } from "utils/Constants";
import { LatLng } from "react-native-maps";


type ModalProps = {
    visible: boolean;
    closeModal: () => void;
    onResultItemPress: (coordinates:LatLng) => () => void;
}

const itemSeparatorComponent = () => <Spacer height={scale(10)} />

export const MapModal = ({ visible, closeModal, onResultItemPress }: ModalProps) => {

    const { models, operations } = useMapModal({onResultItemPress});

    const rednerFlatListItems = ({ item }: { item: TextSearchItem }) => {
        return <ResultItem  
        key={item.place_id} 
        name={item.name} 
        iconUrl={item.icon} 
        address={item.formatted_address} 
        onPress={operations.handlePlaceItemPress(item)} />
    }

    const handleButtonPress = () => {
        closeModal()
    }

    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
            <View style={styles.flastListView}>
                <FlatList 
                stickyHeaderIndices={[0]} 
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="interactive"
                data={models.textSearchQueryResponseData} 
                ItemSeparatorComponent={itemSeparatorComponent} 
                renderItem={rednerFlatListItems} 
                ListHeaderComponent={<FlatListHeader destinationValue={models.inputValue} onInputTextChange={operations.handleInputTextChange} />} />
            </View>
            <RoundButton iconName="arrow-back-outline" onPress={handleButtonPress} />
        </Modal>

    )
}


const styles = StyleSheet.create({
    flastListView: {
        paddingBottom: insets.bottom || scale(10),
    }
})
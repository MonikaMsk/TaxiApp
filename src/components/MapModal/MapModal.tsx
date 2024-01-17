
import { FlatList, Modal, StyleSheet } from "react-native"
import { RoundButton } from "../RoundButton";
import { FlatListHeader } from "./components/FlatListHeader";
import { useMapModal } from "./useMapModal";
import { ResultItem } from "components/ResultItem";
import { TextSearchItem } from "models/types/TextSearchItem";


type ModalProps = {
    visible: boolean;
    closeModal: () => void;
}

export const MapModal = ({ visible, closeModal }: ModalProps) => {

    const {models, operations} = useMapModal();

    const rednerFlatListItems = ({item}: {item: TextSearchItem}) => {
        return <ResultItem name={item.name} iconUrl={item.icon} address={item.formatted_address} onPress={() => {}}/>
    }

    const handleButtonPress = () => {
        closeModal()
    }

    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
            <FlatList data={models.textSearchQueryResponseData} renderItem={rednerFlatListItems} ListHeaderComponent={<FlatListHeader  destinationValue={models.inputValue} onInputTextChange={operations.handleInputTextChange}/>}/>
            <RoundButton iconName="arrow-back-outline" onPress={handleButtonPress} />
        </Modal>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
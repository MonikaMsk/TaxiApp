
import { FlatList, Modal, StyleSheet } from "react-native"
import { RoundButton } from "../RoundButton";
import { FlatListHeader } from "./components/FlatListHeader";
import { useMapModal } from "./useMapModal";


type ModalProps = {
    visible: boolean;
    closeModal: () => void;
}

export const MapModal = ({ visible, closeModal }: ModalProps) => {

    const {models, operations} = useMapModal();

    const rednerFlatListItems = () => {
        return null;
    }


    const handleButtonPress = () => {
        closeModal()
    }

    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
            <FlatList data={[]} renderItem={rednerFlatListItems} ListHeaderComponent={<FlatListHeader  destinationValue={models.inputValue} onInputTextChange={operations.handleInputTextChange}/>}/>
            <RoundButton iconName="arrow-back-outline" onPress={handleButtonPress} />
        </Modal>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
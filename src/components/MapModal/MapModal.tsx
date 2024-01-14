
import { FlatList, Modal, StyleSheet } from "react-native"
import { RoundButton } from "../RoundButton";
import { FlatListHeader } from "./components/FlatListHeader";


type ModalProps = {
    visible: boolean;
    closeModal: () => void;
}

export const MapModal = ({ visible, closeModal }: ModalProps) => {

    const rednerFlatListItems = () => {
        return null;
    }


    const handleButtonPress = () => {
        closeModal()
    }

    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
            <FlatList data={[]} renderItem={rednerFlatListItems} />
            <RoundButton iconName="arrow-back-outline" onPress={handleButtonPress} />
        </Modal>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
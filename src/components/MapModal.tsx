
import { Modal, StyleSheet, View } from "react-native"
import { RoundButton } from "./RoundButton";


type ModalProps = {
    visible: boolean;
    closeModal: () => void;
}

export const MapModal = ({ visible, closeModal }: ModalProps) => {



    const handleButtonPress = () => {
        closeModal()
    }

    return (
        <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
                <RoundButton iconName="arrow-back-outline" onPress={handleButtonPress} />
        </Modal>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
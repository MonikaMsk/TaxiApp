import { StyleSheet, Pressable, View } from "react-native"
import { scale } from "react-native-size-matters"
import { colours } from "theme/Theme"
import { TextComponent } from "./TextComponent"

type ActionButtonProps = {
    text: string
}


export const ActionButton = ({ text }: ActionButtonProps) => {

    return (
        <View style={styles.actionBtnView}>
            <Pressable style={styles.button}>
                <TextComponent color={colours.actionButton.fontColor} version="header">
                    {text}
                </TextComponent>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        height: scale(45),
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.actionButton.backgroundColor,
    },
    actionBtnView: {
        width: '100%',
        paddingHorizontal: scale(20)
    },
})
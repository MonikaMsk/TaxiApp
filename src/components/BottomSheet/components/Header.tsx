import { StyleSheet, View } from "react-native"
import { scale } from "react-native-size-matters"
import { TextComponent } from "../../TextComponent"
import { Divider } from "../../Divider"
import { Spacer } from "../../Spacer"

export const Header = () => {

    return (
        <View style={styles.container}>
            <TextComponent version="header">Choose your ride</TextComponent>
            <Spacer height={scale(12)} />
            <Divider />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        height: scale(50),
        alignItems: 'center',
    },
})
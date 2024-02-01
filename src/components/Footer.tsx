import { StyleSheet, Text, View } from "react-native"
import Animated from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";

export const Footer = () => {

    return (
        <Animated.View style={styles.container} />
    )




}



const styles = StyleSheet.create({
    container: {
        height: scale(70),
        width: '100%',
        backgroundColor: colours.common.background,
        alignItems: 'center',
        alignSelf: 'flex-end',
    }
})
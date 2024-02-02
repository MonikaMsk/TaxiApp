import { StyleSheet, View } from "react-native"
import Animated from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";
import { Divider } from "./Divider";
import { Spacer } from "./Spacer";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Footer = () => {
    return (
        <Animated.View style={styles.container}>
            <Divider />
            <Spacer height={scale(15)} />
            <View style={styles.horizontalContainer}>
                <View style={styles.iconContainer}>
                    <View style={styles.leftIconContainer}>
                        <Ionicons name="person" color={colours.bottomSheet.leftIconColor} size={scale(14)} />
                    </View>
                    <Ionicons name="briefcase-sharp" size={scale(14)} />
                </View>
            </View>
        </Animated.View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: scale(140),
        width: '100%',
        backgroundColor: colours.common.background,
        alignItems: 'center',
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: scale(20),
    },
    iconContainer: {
        width: scale(65),
        height: scale(38),
        borderRadius: scale(65 / 2),
        backgroundColor: colours.bottomSheet.footerRightIconBackground,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: scale(10),
        flexDirection: 'row',
    },
    leftIconContainer: {
        width: scale(38),
        height: scale(38),
        borderRadius: scale(38 / 2),
        backgroundColor: colours.bottomSheet.footerLeftIconBackground,
        alignItems: 'center',
        justifyContent: 'center',
        left: scale(-8),
    },
})
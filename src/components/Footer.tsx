import { StyleSheet, Text, View } from "react-native"
import Animated, { SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";
import { Divider } from "./Divider";
import { Spacer } from "./Spacer";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextComponent } from "./TextComponent";
import { ActionButton } from "./ActionButton";
import { RideItem } from "types/rideItem";
import { insets } from "utils/Constants";


type FooterProps = {
    selectedRide: RideItem,
    offset: SharedValue<number>
}

export const Footer = ({ selectedRide, offset }: FooterProps) => {
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withTiming(offset.value) }]
        }
    })

    return (
        <Animated.View style={[animatedStyles, styles.container]} >
            <Divider />
            <Spacer height={scale(15)} />
            <View style={styles.horizontalContainer}>
                <View style={styles.iconContainer}>
                    <View style={styles.leftIconContainer}>
                        <Ionicons name="person" color={colours.bottomSheet.leftIconColor} size={scale(14)} />
                    </View>
                    <Ionicons name="briefcase-sharp" size={scale(14)} />
                </View>
                <View style={styles.textContainer}>
                    <TextComponent version="smHeader">Personal</TextComponent>
                    <TextComponent version="caption">Apple Pay</TextComponent>
                </View>
                <Ionicons name="chevron-forward" size={scale(14)} />
                <Spacer height={scale(15)} />
            </View>
            <Spacer height={scale(10)} />
            <ActionButton text={`Choose: ${selectedRide.type}`} />
        </Animated.View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: scale(120) + (insets.bottom || scale(10)),
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
    textContainer: {
        flex: 1,
    },

})
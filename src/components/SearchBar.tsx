import { View, StyleSheet, Pressable } from "react-native"
import { colours, shadow } from "theme/Theme";
import { insets, width } from "utils/Constants";
import { scale } from "react-native-size-matters";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TextComponent } from "./TextComponent";
import Animated, { FadeInDown } from "react-native-reanimated";


type SearchBarProps = {
    onPress: () => void;
}

export const SearchBar = ({ onPress }: SearchBarProps) => {

    return (
        <Animated.View entering={FadeInDown} style={styles.container}>
            <Pressable onPress={onPress}>
                <View style={styles.barStyle}>
                    <Ionicons name="search-outline" size={scale(20)} style={styles.icon} />
                    <TextComponent version='default'>Where to?</TextComponent>
                </View>
            </Pressable>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: (insets.top || scale(15)) + scale(60),
        position: 'absolute',
        alignSelf: 'center',
    },
    barStyle: {
        backgroundColor: colours.common.background,
        width: width - scale(40),
        minHeight: scale(42),
        padding: scale(12),
        ...shadow.primary,
        borderRadius: 5,
        flexDirection: 'row'
    },
    icon: {
        marginRight: scale(20),
        marginLeft: scale(5),
    },
})
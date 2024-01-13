import { View, StyleSheet } from "react-native"
import { colours, shadow } from "theme/Theme";
import { insets, width } from "utils/Constants";
import { scale } from "react-native-size-matters";


// type SearchBarProps = {
//     onPress: () => void;
// }


export const SearchBar = () => {

    return (
        <View style={styles.container}>
            <View style={styles.barStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: (insets.top + scale(15)) || scale(75),
        alignSelf: 'center',
    },
    barStyle: {
        backgroundColor: colours.common.background,
        width: width,
        minHeight: scale(42) - 50,
        padding: scale(10),
        alignItems: 'center',
        ...shadow.primary,

    }
})
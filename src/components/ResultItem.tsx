import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";

type ResultItemProps = {
    name: string;
    address: string;
    iconUrl: string;
    onPress: () => void;
}

export const ResultItem = ({ onPress, iconUrl }: ResultItemProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.iconView}>
                <Image
                    style={styles.image}
                    source={{ uri: iconUrl }}
                />
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: scale(50),
    },
    iconView: {
        height: scale(45),
        width: scale(45),
        borderRadius: scale(45 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.resultItem.iconBackground
    },
    image: {
        width: scale(20),
        height: scale(20),
        tintColor: colours.resultItem.iconTint,
    },
})
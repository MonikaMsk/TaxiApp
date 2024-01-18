import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";
import { TextComponent } from "./TextComponent";

type ResultItemProps = {
    name: string;
    address: string;
    iconUrl: string;
    onPress: () => void;
}

export const ResultItem = ({ onPress, iconUrl, name, address }: ResultItemProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.iconView}>
                <Image
                    style={styles.image}
                    source={{ uri: iconUrl }}
                />
            </View>

            <View style={styles.text}>
                <TextComponent version="title">{name}</TextComponent>
                <TextComponent version="caption">{address}</TextComponent>
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
        height: scale(35),
        width: scale(35),
        borderRadius: scale(45 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colours.resultItem.iconBackground,
        marginHorizontal: scale(5),
    },
    image: {
        width: scale(15),
        height: scale(15),
        tintColor: colours.resultItem.iconTint,
    },
    text: {
        flex: 1,
        flexShrink: 1,
    },
})
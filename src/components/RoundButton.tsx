
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { scale } from 'react-native-size-matters'
import { shadow } from '../theme/Theme';
import { insets } from "utils/Constants";
import Ionicons from 'react-native-vector-icons/Ionicons';


type RoundButtonProps = {
    iconName: 'menu-outline' | 'arrow-back-outline',
    onPress?: () => void
}

export const RoundButton = ({ iconName, onPress }: RoundButtonProps) => {

    return (

        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name={iconName} size={scale(28)} />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    button: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(50 / 2),
        backgroundColor: '#fff',
        position: 'absolute',
        top: insets.top || scale(15),
        left: scale(20),
        alignItems: 'center',
        justifyContent: 'center',
        ...shadow.primary,
    }
})
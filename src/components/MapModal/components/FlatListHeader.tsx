import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";
import { width } from "utils/Constants";



export const FlatListHeader = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: width - scale(50),
    }
})
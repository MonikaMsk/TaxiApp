import { StyleSheet, View } from "react-native"
import { colours } from "theme/Theme"


export const Divider = () => {
    
    return <View style={styles.divider}/>

}


const styles = StyleSheet.create({
    divider: {
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: colours.divider.backgroundColor,
    }
})
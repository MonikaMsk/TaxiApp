import { Spacer } from "components/Spacer"
import { TextComponent } from "components/TextComponent"
import { StyleSheet, View } from "react-native"
import { scale } from "react-native-size-matters"


type SectionHeaderProps = {
    title:string
}

export const SectionHeader = ({title}: SectionHeaderProps) => {

    return (
        <View style={styles.container}>
              <Spacer width={scale(20)} />
            <TextComponent version="header">{title}</TextComponent>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: scale(30),
        flexDirection: 'row',
        alignItems: 'center',
    },
})
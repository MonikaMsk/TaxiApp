import { StyleSheet, View } from "react-native";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";
import { width } from "utils/Constants";
import { UsersInput } from "components/UsersInput";
import { Spacer } from "components/Spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Divider } from "components/Divider";

type FlatListHeaderProps = {
destinationValue: string;
onInputTextChange: (text:string) => void;
}

export const FlatListHeader = ({destinationValue, onInputTextChange}: FlatListHeaderProps) => {

    const insets = useSafeAreaInsets();

    return (
        <>
            <View style={styles.container}>
                <Spacer height={insets.top + scale(90)} />
                <View style={styles.horizontalContainer}>
                    <UsersInput disabled placeholder="Current Location" />
                    <Spacer height={scale(10)} />
                    <UsersInput value={destinationValue} onChangeText={onInputTextChange}/>
                </View>
                    <Divider />
            </View>
        <Spacer height={scale(10)}/>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: colours.common.background,
        alignItems: 'center',
    },
    horizontalContainer: {
        flexDirection: 'column',
        width: width - scale(50),
        marginBottom: scale(10),
    },
})
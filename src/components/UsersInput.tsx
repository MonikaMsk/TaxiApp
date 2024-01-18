import { StyleSheet, TextInput } from "react-native";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";

type UsersInputProps = {
    disabled?: boolean;
    placeholder?: string;
    onChangeText?: (text:string) => void;
    value?: string;
}

export const UsersInput = ({ disabled, placeholder, onChangeText, value }: UsersInputProps) => {


    const returnInput = () => {
        if (disabled) {
            return (
                <TextInput
                    style={styles.disabledStyle}
                    placeholder={placeholder}
                    editable={false}
                />
            )
        }

        return (
            <TextInput
                style={styles.inputStyle}
                placeholder={placeholder}
                autoFocus={true}
                onChangeText={onChangeText}
                value={value}
            />
        )
    };
    
    return returnInput();
}


const styles = StyleSheet.create({
    disabledStyle: {
        minHeight: scale(30),
        width: '100%',
        paddingHorizontal: scale(5),
        backgroundColor: colours.textInput.disabledBackground
    },
    inputStyle: {
        minHeight: scale(30),
        width: '100%',
        paddingHorizontal: scale(5),
        backgroundColor: colours.textInput.activeBackground,
        color: colours.common.textCommon,

    },
})
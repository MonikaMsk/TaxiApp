import { StyleSheet, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colours } from 'theme/Theme'




type TextComponentProps = {
    version: 'default',
    children: string,
}

 export const TextComponent = ({ version, children }: TextComponentProps) => {


    const getText = (version: TextComponentProps['version']) => {
        switch (version) {
            case 'default':
                return <Text style={styles.default}>{children}</Text>
            default:
                return <Text style={styles.default}>{children}</Text>
        }
    }

    return getText(version)
}

const styles = StyleSheet.create({

    default: {
        fontSize: scale(15),
        color: colours.common.text,
        alignSelf: 'center'
    },
})



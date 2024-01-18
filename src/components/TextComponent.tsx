import { StyleSheet, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colours } from 'theme/Theme'




type TextComponentProps = {
    version: 'default' | 'title' | 'caption',
    children: string,
}

export const TextComponent = ({ version, children }: TextComponentProps) => {


    const getText = (version: TextComponentProps['version']) => {
        switch (version) {
            case 'default':
                return <Text style={styles.default}>{children}</Text>
            case 'title':
                return <Text style={styles.title}>{children}</Text>
            case 'caption':
                return <Text style={styles.caption}>{children}</Text>
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
    title: {
        fontSize: scale(15),
        fontWeight: '700',
        color: colours.common.textCommon
    },
    caption: {
        fontSize: scale(13),
        color: colours.common.text
    }
})



import { Spacer } from "components/Spacer";
import { TextComponent } from "components/TextComponent";
import { useDate } from "hooks/useDate";
import { Pressable, StyleSheet, Image, View } from "react-native";
import { scale } from "react-native-size-matters";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colours } from "theme/Theme";


type ChooseRideItemProps = {
    title: string;
    price: string;
    description: string;
    eta: number;
    maxPassangers: number | null;
    selected: boolean;
    onPress: () => void;
    variant: "compact" | "expanded"
}

export const ChooseRideItem = ({ selected, onPress, title, maxPassangers, variant, eta, description, price }: ChooseRideItemProps) => {
    const styleSheet = styles(selected);
    const { date } = useDate();
    const isExtended = variant === 'expanded';

const formattedETA = date.add(eta, "minutes").format("HH:mm")

    return (
        <Pressable style={styleSheet.container} onPress={onPress}>
            <Image style={styleSheet.image} source={require('../../../assets/UberX.jpeg')} />
            <Spacer width={scale(5)} />
            <View style={styleSheet.textContainer}>
                <View style={styleSheet.viewContainer}>
                    <View style={styleSheet.iconContainer}>
                        <TextComponent version={"header"}>{title}</TextComponent>
                        <Spacer width={scale(5)} />
                        {maxPassangers && (selected || isExtended) ? <>
                            <Ionicons name="person" size={scale(14)} />
                            <TextComponent version={"body"} >{maxPassangers?.toString()}</TextComponent>
                        </> : null}
                    </View>
                    {!isExtended ? <TextComponent version={"body"}>{selected ? `${formattedETA} • ${eta} mins to arrival` : formattedETA}</TextComponent> : null}
                    {isExtended ? <TextComponent version={"caption"}>{description}</TextComponent> : null}
                </View>
                <TextComponent version="header">{price}</TextComponent>
            </View>
        </Pressable>
    )
}


const styles = (selected: boolean) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: selected ? colours.rideItem.selectedBorderColor : colours.rideItem.borderColor,
        borderWidth: scale(2),
        height: scale(85),
        alignItems: 'center',
        borderRadius: scale(15),
        paddingHorizontal: scale(10),
        marginHorizontal: scale(10),
        overflow: 'hidden',
    },
    image: {
        width: scale(80),
        resizeMode: 'contain',
    },
    textContainer: {
        flexDirection: 'row',
        flexShrink: 1,
    },
    iconContainer: {
        flexDirection: 'row',
        flexShrink: 1,
        alignItems: 'center',
    },
    viewContainer: {
        flex: 1,
    },
})
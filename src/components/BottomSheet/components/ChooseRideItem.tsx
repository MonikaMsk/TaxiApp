import { Spacer } from "components/Spacer";
import { Pressable, StyleSheet, Image } from "react-native";
import { scale } from "react-native-size-matters";
import { colours } from "theme/Theme";


type ChooseRideItemProps = {
    titile: string;
    price: string;
    description: string;
    eta: number;
    maxPassangers: number | null;
    selected: boolean;
    onPress: () => void;
    variant: "compact" | "expanded"
}

export const ChooseRideItem = ({selected, onPress }: ChooseRideItemProps) => {
    const styleSheet = styles(selected)
    return (
        <Pressable style={styleSheet.container} onPress={onPress}>
            <Image style={styleSheet.image} source={require('../../../assets/UberX.jpeg')}/>
        </Pressable>
    )
}


const styles = (selected: boolean) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: selected ? colours.rideItem.selectedBorderColor : colours.rideItem.borderColor,
        borderWidth: StyleSheet.hairlineWidth,
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
    }
})
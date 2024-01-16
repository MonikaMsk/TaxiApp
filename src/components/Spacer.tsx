import { View } from "react-native"


type SpacerProps = {
    width?: number ;
    height?: number;
}

export const Spacer = ({width,height}: SpacerProps) => {
    return (
        <View style={{width, height}} />
    )
}
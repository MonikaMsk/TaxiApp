import { useSearchHistory } from "hooks/useSearchHistory"
import { useSearchQuery } from "models/places/useSearchQuery"
import { TextSearchItem } from "models/types/TextSearchItem"
import { useState } from "react"
import type { LatLng } from "react-native-maps"
import { useDebounce } from "use-debounce"

type useMapModalProps = {
    onResultItemPress: (coordinates: LatLng) => void;
    closeModal: () => void;
}


export const useMapModal = ({ onResultItemPress, closeModal }: useMapModalProps) => {

    const [inputValue, setInputValue] = useState('')
    const [debounceInputValue] = useDebounce(inputValue, 500)


    const { searchHistoryItem, addItemToSearchHistory } = useSearchHistory("places");

    const { response } = useSearchQuery(debounceInputValue)

    const handleInputTextChange = (value: string) => {
        setInputValue(value)
    }

    const handlePlaceItemPress = (item: TextSearchItem) => {
        return () => {
            onResultItemPress({ latitude: item.geometry.location.lat, longitude: item.geometry.location.lng })
            addItemToSearchHistory(item);
        }

    }

    const handleRoundButtonPress = () => {
        closeModal();
    }

    const handleModalDismiss = () => {
        setInputValue('')
    }

    return {
        models: { 
            inputValue,
            textSearchQueryResponseData: response?.results || searchHistoryItem },
        operations: { 
        handleInputTextChange,
        handlePlaceItemPress,
        handleRoundButtonPress,
        handleModalDismiss 
        }
    }
}
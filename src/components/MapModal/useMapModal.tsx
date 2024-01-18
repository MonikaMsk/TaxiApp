import { useSearchQuery } from "models/places/useSearchQuery"
import { useState } from "react"
import { useDebounce } from "use-debounce"


export const useMapModal = () => {

    const [inputValue, setInputValue] = useState('')
    const [debounceInputValue] = useDebounce(inputValue, 500)
    const { response } = useSearchQuery(debounceInputValue)

    const handleInputTextChange = (value: string) => {
        setInputValue(value)
    }

    return {
        models: { inputValue, textSearchQueryResponseData: response?.results || [] },
        operations: { handleInputTextChange }
    }
}
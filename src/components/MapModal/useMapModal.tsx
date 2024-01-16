import { useState } from "react"


export const useMapModal = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInputTextChange = (value: string) => {
        console.log(value);
        
        setInputValue(value)
    }

    return {
        models: {inputValue},
        operations: {handleInputTextChange}
    }
}
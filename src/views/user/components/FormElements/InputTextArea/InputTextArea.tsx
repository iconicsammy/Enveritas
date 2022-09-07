import Translated from "views/shared/components/Translated/Translated"
import { useEffect, useState } from 'react';

/*
    Common form element for text
*/


interface props {
    defaultValue: string,
    labelTransationKey?: string,
    elementName: string,
    onChangeHandler: Function,
    disabled?: Boolean
}

function InputTextArea({ defaultValue, elementName, onChangeHandler, labelTransationKey = "", disabled = false }: props) {
    const [inputValue, setInputValue] = useState("")

    const emitValue = (value: string) => {
        setInputValue(value);
        onChangeHandler({
            elementName,
            value: inputValue
        });
    }

    useEffect(() => {
        setInputValue(defaultValue)
    }, [])

    return (
        <>
            <label htmlFor={elementName} className="block text-sm font-medium text-gray-700"><Translated translatationKey={labelTransationKey} /></label>
            <textarea
                name={elementName}
                id={elementName}
                className="w-full
                h-32
                px-4
                py-3
                border-2 border-gray-300
                rounded-sm
                outline-none
                focus:border-blue-400"
                value={inputValue}
                onChange={(event) => emitValue(event.target.value)}
            >{inputValue}</textarea>
        </>)
}

export default InputTextArea
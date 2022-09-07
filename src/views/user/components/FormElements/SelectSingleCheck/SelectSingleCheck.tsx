import Translated from "views/shared/components/Translated/Translated"
import { useEffect, useState } from 'react';
import { labelToUIElementName } from "utils/dataFormatters";
import { ValidationObject } from "../../QuestionsEditor/types";

/*
    Common form element for text
*/

interface RadioOptions {
    labelTranslationKey: string,
    value: string | number
}


interface props {
    defaultSelectedValue: string | number,
    label: string,
    onChangeHandler: Function,
    options: string[],
    validations: ValidationObject
}

function SelectSingleCheck({ defaultSelectedValue, options, onChangeHandler, label, validations}: props) {
    const [inputValue, setInputValue] = useState(defaultSelectedValue)

    const elementName = labelToUIElementName(label);


    const emitValue = (value: string | number) => {
        setInputValue(value);
        onChangeHandler({
            elementName,
            value: inputValue
        });
    }

    useEffect(() => {
        setInputValue(defaultSelectedValue)
    }, [])

    const alreadySelected = (value: string | number) => {
        if (value == inputValue) {
            return true
        }
        return false
    }

    return (
        <>
            <fieldset>
                <div>
                    <p className="block text-sm font-medium text-gray-700">{label}</p>
                </div>
                <div className="mt-4 space-y-4">

                    {options.map(option => {
                        return (<div className="flex items-center" key={option}>
                            <input
                                id={elementName}
                                name={elementName}
                                type="radio"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                value={option}
                                checked={alreadySelected(option)}
                                onChange={(event) => emitValue(event.target.value)}
                            />
                            <label htmlFor={elementName} className="ml-3 block text-sm font-medium text-gray-700">
                                {option}
                            </label>
                        </div>)
                    })}
                </div>
            </fieldset>
        </>)
}

export default SelectSingleCheck

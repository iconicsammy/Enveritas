import { useState, useEffect } from 'react';
import { ValidationObject } from "../../QuestionsEditor/types";
import { checkValidation, validators, ValidationResult} from "utils/validators";
import { labelToUIElementName } from 'utils/dataFormatters';
import Translated from 'views/shared/components/Translated/Translated';

/*
   An HTML input type text or number wrapper. Used for when user has to "type" something
*/
type OptionTypes = string | number

interface props {
    defaultValue?: OptionTypes,
    label: string,
    onChangeHandler: Function,
    validations: ValidationObject,
    handleFieldErrorStatus: Function
}



function InputText({ onChangeHandler, defaultValue = "", label, validations, handleFieldErrorStatus }: props) {
    const [inputValue, setInputValue] = useState(defaultValue)
    const [fieldValidationStatus, setFieldValidationStatus] = useState<ValidationResult>({ok: true})

    const elementName = labelToUIElementName(label);

    const handleOnChange = (value: string) => {
        //run validation now
        setInputValue(value);
        const validationResult: ValidationResult = checkValidation(validations, value);
        setFieldValidationStatus(validationResult);
        handleFieldErrorStatus(elementName, validationResult.ok);
        if (validationResult.ok ){
            onChangeHandler({
                elementName,
                value
            });
        }
    }

    return (
        <>
            <label htmlFor={elementName} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type="text"
                name={elementName}
                id={elementName}
                value={inputValue}
                onChange={(event) => handleOnChange(event.target.value)}
                className="w-full px-4 py-2 border border-gray-300 outline-none focus:border-blue-400"
            />
            {!fieldValidationStatus.ok && <p className="text-red text-sm font-bold px-4 py-3">we have {fieldValidationStatus.failedValidations?.length} errors here</p>  }
        </>)
}

export default InputText

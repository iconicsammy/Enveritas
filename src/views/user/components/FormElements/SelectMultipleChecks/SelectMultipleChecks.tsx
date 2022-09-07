import Translated from "views/shared/components/Translated/Translated"
import { useEffect, useState } from 'react';
import { labelToUIElementName } from "utils/dataFormatters";
import { ValidationObject } from "../../QuestionsEditor/types";

/*
    Common form element for text
*/

type OptionTypes = string | number


interface props {
    label: string,
    validations: ValidationObject
    onChangeHandler: Function,
    options: string[]
}



function SelectMultipleChecks({ options, onChangeHandler, label, validations }: props) {
    const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

    const elementName = labelToUIElementName(label);

    const emitValue = (value: string) => {
       let updateCheckedOptions : string[] = []
       if (alreadySelected(value)){
        //remove it from checked options
        updateCheckedOptions = checkedOptions.filter(option=>{
            return option !== value;
        })
       }else{
        updateCheckedOptions = [...checkedOptions, value]
       };
       setCheckedOptions(updateCheckedOptions);

       onChangeHandler({
        elementName,
        value: updateCheckedOptions
       })
    }


    const alreadySelected = (value: string) => {
        return checkedOptions.indexOf(value) > -1;
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
                                type="checkbox"
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

export default SelectMultipleChecks

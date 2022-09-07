import Translated from "views/shared/components/Translated/Translated";
import { useState } from "react";

interface props {
    checked?: Boolean,
    handleValidationChoice: Function,
    option: string,
    labelTranslationKey: string,
}


const MinMax = ({ handleValidationChoice, option, labelTranslationKey }: props) => {
    const [value, setValue] = useState(0);
    const [checkState, setCheckState] = useState(false)

    const handleOption = (selected: boolean) => {
        setCheckState(selected);
        if (selected) {
            //checked
            handleValidationChoice({ [option]: value })
        } else {
            handleValidationChoice({ [option]: null })
        }
    }

    const handleValueChange = (val: number) => {
        setValue(val)
        if (checkState) {
            handleValidationChoice({ [option]: val })
        }
    }
    return (
        <div className="flex flex-row justify-between h-12 align-center">
            <div className="form-control">
                <label className="label">

                    <input type="checkbox" onChange={(event) => handleOption(event.target.checked)} className="checkbox checkbox-accent mx-5" />
                    <span className="label-text text-black"><Translated translatationKey={labelTranslationKey} /></span>
                </label>
            </div>



            <div className="flex justify-center">
                <div className="mb-3 w-12">
                    <select className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:outline-none"
                        onChange={(event) => handleValueChange(parseInt(event.target.value))}
                    >
                        <option selected value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </select>
                </div>
            </div>
        </div>)
}

export default MinMax;
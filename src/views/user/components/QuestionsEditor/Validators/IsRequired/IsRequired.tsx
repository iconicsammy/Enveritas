import Translated from "views/shared/components/Translated/Translated"


interface props {
    checked?: Boolean,
    handleValidationChoice: Function
}

function IsRequired({ handleValidationChoice, checked = false }: props) {

    const handleCheckBox = (value: Boolean) => {
        handleValidationChoice({ "isRequired": value })
    }

    return (<div className="flex flex-row justify-between h-12">
        <div className="form-control">
            <label className="label">
              
                <input type="checkbox" onChange={(event) => handleCheckBox(event.target.checked)} className="checkbox checkbox-accent mx-5" />
                <span className="label-text text-black"><Translated translatationKey="isRequired" /></span>
            </label>
        </div>


    </div>
    )
}

export default IsRequired;

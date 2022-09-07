import Translated from "views/shared/components/Translated/Translated"
/*
 Used When a user wants to add choice questions (single or multiple)
*/


interface props {
    handleMultiLineText: Function
}

function ChoicesEditor({ handleMultiLineText }: props) {

    return (<><div className="form-control">
        <label className="label">
            <span><Translated translatationKey="choicesHint" /></span>

        </label>
        <textarea className="textarea textarea-bordered h-24 bg-white" onChange={(event) => handleMultiLineText(event.target.value)}></textarea>
    </div>
    </>
    )
}

export default ChoicesEditor;

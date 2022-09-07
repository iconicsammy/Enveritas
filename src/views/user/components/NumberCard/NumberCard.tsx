import Translated from "views/shared/components/Translated/Translated"
import { formatToNumber } from "utils/dataFormatters"

/*
    Common element to display numbers
*/

interface props {
  value: number,
  titleKey: string,
  decimalPoints?: number,
  btnCaptionKey?: string,
  btnClickHandler?: Function
}

function NumberCard({ value, titleKey, decimalPoints = 2,btnCaptionKey, btnClickHandler }: props) {
  return (
    <div className="stat">
      <div className="stat-title text-2xl"><Translated translatationKey={titleKey} /></div>
      <div className="stat-figure text-secondary">

    
    </div>
      <div className="stat-value">{formatToNumber(value, decimalPoints)}</div>
      {btnCaptionKey && btnClickHandler && (<div className="stat-actions">
        <button className="btn btn-sm btn-success" onClick={() => btnClickHandler(btnCaptionKey)}>
          <Translated translatationKey={btnCaptionKey} />
        </button>
      </div>)}
    </div>


    

  )
}

export default NumberCard

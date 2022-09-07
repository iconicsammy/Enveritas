import { useState } from "react";
import Translated from "views/shared/components/Translated/Translated"
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';


interface props {

    handleMoveUpDown: Function
}

function MoveUpDown({ handleMoveUpDown }: props) {


    return (
        <div className="flex flex-col items-center content-between space-y-10">
         <div onClick={()=>handleMoveUpDown('up')}><FaArrowUp/></div>
         <div onClick={()=>handleMoveUpDown('down')}><FaArrowDown /></div>
    </div>)
}

export default MoveUpDown;

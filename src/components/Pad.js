import React from "react";
import delIcon from '../assets/Vector.png'

const Pad = ({id,text,time,handleDelNote}) => {

    return (
        <div className='note'>
            <span className='main-text'>{text}</span>
            <div><small>{time}</small>
            
           <img src={delIcon} width='20px' className='del-icon' onClick={()=>handleDelNote(id)}/></div>
        </div>
    )
}

export default Pad;

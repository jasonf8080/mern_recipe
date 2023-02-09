
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';


export const ListInput = ({stateName, index, handleChange, removeItem}) => {
  
  return (
   <div className="add-ingredient">
        <button className='btn-secondary remove-item-btn' onClick={(e) => removeItem(e.currentTarget.parentElement, stateName, index)}><span><AiOutlineMinus/></span></button>
        <input type="text" onChange={(e) => handleChange(stateName, index, e.target.value)}/> 
    </div>
  )
}

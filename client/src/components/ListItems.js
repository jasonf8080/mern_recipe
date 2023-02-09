import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { useDispatch } from 'react-redux'


export const ListItems = ({title, list, toggleFunction, editFunction, checked}) => {

  return (
  <div className="list">
            <h2>{title}</h2>
            <div className="list-items">
            {list.map((item, index) => {
                return (
                    <div className='list-item' key={index}>
                        <div className="list-item-flex">
                            <button className={checked && "checkbox"} onClick={toggleFunction}>{checked && <AiOutlineCheck/>}</button>
                            <p className={checked && 'checked'}>{item}</p>
                        </div>

                        {!checked && <button className="edit-btn btn-secondary" onClick={() => editFunction(item)}><BsPencil/></button>}
                    </div>
                ) 
            })}
            </div>
    </div>
  )
}

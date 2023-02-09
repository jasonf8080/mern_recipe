import React from 'react'
import { Wrapper } from '../assets/styled-wrappers/editReviewModal'
import { TiTimes } from "react-icons/ti";



export const Modal = ({message, exitFunction, acceptFunction}) => {
  console.log(message);
  return (
    <Wrapper>
        <div className="modal">
            <div className="top-modal"> <button className='exit-btn' onClick={exitFunction}><TiTimes/></button></div>
            <div className="modal-content">
                 <p>{message}</p>
                 <button className="btn" onClick={acceptFunction}>OK</button>
            </div>
        </div>
    </Wrapper>
  )
}

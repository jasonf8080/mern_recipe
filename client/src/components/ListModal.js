import React, { useEffect, useState } from 'react'
import {Wrapper} from '../assets/styled-wrappers/editReviewModal'
import { TiTimes } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import {BiEdit} from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import { checkExistingList, editListItem, deleteListItem, clearEditing, clearMessage } from '../redux/listSlice'
import { handleChange } from '../redux/userSlice'

export const ListModal = () => {
    const dispatch = useDispatch();
    const {editingItem, editingMsg} = useSelector((store) => store.list);
    const [newItem, setNewItem] = useState(editingItem)

    const handleChange = (e) => {
     setNewItem(e.target.value)
     dispatch(clearMessage())
    }
  

    const submitEditItem = async() => {
      await dispatch(editListItem({editingItem, newItem}))
      await dispatch(checkExistingList())
     
    }

    const deleteItem = async() => {
      await dispatch(deleteListItem(editingItem))
      await dispatch(checkExistingList())

    }

    const exit = () => {
      dispatch(clearEditing())
      dispatch(clearMessage())
    }

    useEffect(() => {
      dispatch(clearMessage())
    }, [])


  return (
    <Wrapper>
         <div className="modal list-modal">
            <div className="top-modal"> <button className='exit-btn' onClick={exit}><TiTimes/></button></div>
              <input id='list-modal-input' type="text" value={newItem} onChange={handleChange}/>
               {editingMsg && <span className='editing-msg'>{editingMsg}</span>}
              <div className="btn-container">
                <button className='delete-btn' onClick={deleteItem}>Remove <span><TiTimes/></span></button>
                 <button className='save-btn' onClick={submitEditItem}>Save <span><BiEdit/></span></button>
              </div>
        </div>
    </Wrapper>
  )
}

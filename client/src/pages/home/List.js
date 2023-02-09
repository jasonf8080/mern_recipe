import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Wrapper} from '../../assets/styled-wrappers/List'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { checkExistingList, createList, updateItem, addItemToList, editList, checkItem, uncheckItem, setEditingItem, clearMessage } from '../../redux/listSlice'
import { ListItems, ListModal } from '../../components'



const List = () => {
    const dispatch = useDispatch();
    const {list, checkedList, item, userExists, editingItem, editingMsg} = useSelector((store) => store.list)


    const getList = async() => {
        try {
            await dispatch(checkExistingList())
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        dispatch(updateItem({name: e.target.name, value: e.target.value}))
        dispatch(clearMessage())
    }

    
    const submitListItem = async() => {
      
        if(!userExists){
           await dispatch(createList(item));
           await dispatch(checkExistingList())
        } else {
            console.log('add item to existing')
            await dispatch(editList(item))
            await dispatch(checkExistingList())
        }
        
    }


    const addItemToChecked = async(e) => {
        await dispatch(checkItem(e.currentTarget.nextElementSibling.textContent))
        await dispatch(checkExistingList())
    }

    const removeItemFromChecked = async(e) => {
        await dispatch(uncheckItem(e.currentTarget.nextElementSibling.textContent))
        await dispatch(checkExistingList())
    }

    const editItem = (item) => {
        dispatch(setEditingItem(item))
    }

    
    useEffect(() => {
       getList();
    }, [])

    
   


  return (
    <Wrapper>
        {editingItem && <ListModal/>}
        <div className='input-bar'>
           <input type="text" name='item' placeholder='Add Item to List' value={item} onChange={handleChange}/>
           <button className={item.length < 1 ? 'disabled-btn' : 'btn'} disabled={item.length < 1} onClick={submitListItem}><AiOutlinePlus/></button>
        </div>

        {editingMsg && !editingItem && <span className='editing-msg'>{editingMsg}</span>}


       <ListItems title='List' list={list} toggleFunction={addItemToChecked} editFunction={editItem}></ListItems>
       <ListItems title='Checked List' list={checkedList} toggleFunction={removeItemFromChecked} checked={true}></ListItems>  
       
        
    </Wrapper>
  )
}

export default List
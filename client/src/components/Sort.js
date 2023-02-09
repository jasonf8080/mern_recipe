import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



export const Sort = ({handleSort}) => {
    const dispatch = useDispatch();
 
  return (
    <div className="sort-flex">
        <p>Sort By:</p>
        <select name="sort" className='sort' onChange={handleSort}>
            <option value="default">Default</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
        </select>
    </div>
  )
}

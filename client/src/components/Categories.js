import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export const Categories = ({value, changeValue}) => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([])

    const getCategories = async() => {
      try {
        const {data} = await axios.get('/api/v1/recipes/getAllCategories')
        setCategories(data.categories)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getCategories();
    }, [])

  return (
    <select name="category" value={value} onChange={changeValue}>
       {categories.map((item, index) => {
          return <option key={index} value={item}>{item}</option>
       })}
    </select>
  )
}

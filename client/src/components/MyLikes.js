import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserLikes } from '../redux/profileSlice';
import RecipeItem from './RecipeItem';
import Loading from './Loading'
import { Sort } from './Sort';



export const MyLikes = () => {
  const dispatch = useDispatch();
  const {userLikes, loading, sort} = useSelector((store) => store.profile)



  useEffect(() => {
    dispatch(getAllUserLikes(sort));
  }, [sort])

 

  
  if(loading){
    return <Loading/>
  }

  return (
    <>
    {userLikes.length < 1 ? <h1 className='empty-message'>You havent saved any recipes yet!</h1> 
    :
    <div className='responsive-recipes'>
      {userLikes.map((item, index) => {
        return <RecipeItem key={index} {...item[0]}/>
      })}
    </div>
   }
 </>
  )
}

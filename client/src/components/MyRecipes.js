import React, { useState } from 'react'
import Loading from './Loading'
import { getAllUserRecipes } from '../redux/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RecipeItem from './RecipeItem';
import {AiOutlinePlus} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { handleSort } from '../redux/profileSlice';
import { Sort } from './Sort';

export const MyRecipes = ({action, create}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userRecipes, loading, sort} = useSelector((store) => store.profile)
 


  useEffect(() => {
    dispatch(action)
  }, [sort])


  
  if(loading){
    return <Loading/>
  }

  return (
    <>
    {userRecipes.length < 1 ? <h1 className='empty-message'>No recipes found!</h1> 
    :
    <div className='responsive-recipes'>
      {create &&
        <div className='create-a-recipe' onClick={() => navigate('/createRecipe')}>
          <p>Create New Recipe</p>
          <div className='add-btn'><AiOutlinePlus/></div>
        </div>
      }

      {userRecipes.map((item, index) => {
        return <RecipeItem key={index} {...item}/>
      })}
    </div>

   }
 </>
  )
}

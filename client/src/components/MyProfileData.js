import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsBook } from 'react-icons/bs'
import { HiOutlineHeart } from 'react-icons/hi2'
import { MyRecipes } from './MyRecipes'
import { MyLikes } from './MyLikes'
import { getAllUserRecipes, getAllUserLikes } from '../redux/profileSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Sort } from './Sort'
import { handleSort } from '../redux/profileSlice'


export const MyProfileData = () => {

    const dispatch = useDispatch();
    const [myRecipes, setMyRecipes] = useState(true);
    const {userRecipes, userLikes, sort} = useSelector((store) => store.profile)
     // const sort = '';
  

    useEffect(() => {
      dispatch(handleSort({name: 'sort', value: ''}))
        console.log(sort, 'reset sort')
    }, [myRecipes])
    
  return (
    <>
    <div className={myRecipes ?  'tabs-recipes tabs' : 'tabs' }>
        <span className="tab-selector"></span>
        <p onClick={() => setMyRecipes(true)}>My Recipes <span><BsBook/></span></p>
        <p onClick={() => setMyRecipes(false)}>My Likes <span><HiOutlineHeart/></span></p>
    </div>

    {myRecipes && userRecipes.length > 1 && <Sort handleSort={(e) => dispatch(handleSort({name: 'sort', value: e.target.value}))}></Sort>}
    {!myRecipes && userLikes.length > 1 && <Sort handleSort={(e) => dispatch(handleSort({name: 'sort', value: e.target.value}))}></Sort>}
    <div className="recipes-container">
      {myRecipes ? <MyRecipes action={getAllUserRecipes(sort)} create={true} sort={sort}/> 
         : 
      <MyLikes sort={sort}/>}
     </div>
     </>
  )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import defaultUser from '../assets/images/defaultUser.jpeg'
import Wrapper from '../assets/styled-wrappers/Recipe';
import {Loading, List} from '../components';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { checkIfRecipeSaved, saveRecipe, removeSavedRecipe, deleteRecipe, beginDelete } from '../redux/recipeSlice';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';



 const RecipeMain = ({data}) => {
  
    const dispatch = useDispatch();
    const {image, title, ingredients, steps, _id:recipeID, createdBy, createdByName, createdByImage} = data;
    const {user} = useSelector((store) => store.user)
    const {recipeLoading, recipeSaved} = useSelector((store) => store.recipe);
    //const [saved, setSaved] = useState(true)
    //For now just use a temp user image, eventaully will be the recipe creator


    const handleSave = async(recipeID) => {
      //console.log(recipeID)
      if(!recipeSaved){
          await dispatch(saveRecipe(recipeID))
          const credentials = {userID: user._id, recipeID}
          dispatch(checkIfRecipeSaved(credentials))
         
      } else {
         await dispatch(removeSavedRecipe(recipeID))
        const credentials = {userID: user._id, recipeID}
        dispatch(checkIfRecipeSaved(credentials))
      }
    }


    useEffect(() => {
      const credentials = {userID: user._id, recipeID}
      dispatch(checkIfRecipeSaved(credentials))
    }, [recipeID])




    if(recipeLoading){
        return <div className="mini-loader"><Loading/></div>
    } 
    
  return (
    <div className='recipe-main'>
        <div className="recipe-img-container">
            <img src={image} className='recipe-img' alt='recipe-img'/>
            <div className="overlay"></div>
        </div>

        <div className='recipe-main-info'>
          <img src={createdByImage || defaultUser} className='user-img' alt='user-img'/>
          <p className='created-by'>Recipe created by <span><Link to={`/user/${createdBy}`}>{createdByName}</Link></span></p>
          <h1 className='recipe-title'>{title}</h1>
          <div className="btns-flex">
            <button className="save-btn btn" onClick={() => handleSave(recipeID)}>
            {recipeSaved ? <span><BsBookmarkFill/> <p>Recipe Saved</p></span>
               : 
              <span><BsBookmark/> <p>Save Recipe</p></span>
            }</button>

            {user._id === createdBy &&  <button className='btn delete-recipe-btn' onClick={() => dispatch(beginDelete())}><span><BsTrash/></span></button>}
          </div>
          
        </div>

        <div className="recipe-additional-info">
          <List name='ingredients' data={ingredients}></List>
          <List name='steps' data={steps}></List>
        </div>

    </div>
  )
}


export default RecipeMain;
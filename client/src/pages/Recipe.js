import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecipe, getSingleRecipe, clearMessage } from '../redux/recipeSlice';
import { LeaveAReview, RecipeMain, Ratings, Reviews, Loading } from '../components';
import Wrapper from '../assets/styled-wrappers/Recipe';
import { Modal } from '../components';
import { cancelEdit, getExistingReview } from '../redux/reviewSlice';
import { clearReviewMessage } from '../redux/reviewSlice';


 const Recipe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {activeRecipe, message} = useSelector((store) => store.recipe)
    const {reviewMessage, reviewActionLoading} = useSelector((store) => store.review)
    const {id} = useParams();


    useEffect(() => {
       dispatch(getSingleRecipe(id))
       dispatch(clearMessage())
       dispatch(clearReviewMessage())
    }, [id])

 {/* // <Main></Main> //setup individual loading for this component 
   // <Reviews></Reviews> // this one as well */} 

  return (
  <Wrapper>
         {message === 'Recipe has successfully been deleted' && <Modal message={message} 
         exitFunction={() => {navigate('/home')}} 
         acceptFunction={() => {navigate('/home')}} />
         }

         {message === 'Do you wish to delete recipe?' && <Modal message={message} 
         exitFunction={() => dispatch(clearMessage())}
         acceptFunction={() => {
            dispatch(deleteRecipe(id))
            }}/>}
         {reviewMessage === 'You have already reviewed this recipe... Do you wish to edit your review?' && <Modal message={reviewMessage} exitFunction={() => dispatch(cancelEdit())} acceptFunction={() => dispatch(getExistingReview(id))}/>}
         {reviewMessage && reviewMessage !== 'You have already reviewed this recipe... Do you wish to edit your review?' && <Modal message={reviewMessage} exitFunction={() => dispatch(clearReviewMessage())} acceptFunction={() => dispatch(clearReviewMessage())}/>}
         {reviewActionLoading && <div className='loader-container'><div className="mini-loader"><Loading/></div></div>}
         
        <RecipeMain data={activeRecipe}></RecipeMain>
        <Ratings></Ratings>
        <Reviews></Reviews>
        <LeaveAReview></LeaveAReview>
   </Wrapper>
  )
}

export default Recipe
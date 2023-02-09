import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import defaultUser from '../assets/images/defaultUser.jpeg'
import { stars } from '../utils/stars'
import { TiTimes } from "react-icons/ti";


//TEMP 
import {Wrapper} from '../assets/styled-wrappers/editReviewModal'


import { IoMdStarOutline, IoMdStar } from 'react-icons/io'
import { clearValues, createReview, getAllRecipeReviews, getExistingReview, handleChange, cancelEdit, editReview, setDefaultEdit} from '../redux/reviewSlice'

const LeaveAReview = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((store) => store.user);
    const {activeRecipe:{_id: id}} = useSelector((store) => store.recipe)
    const {editMsg, rating, review, isEditing, page} = useSelector((store) => store.review)
    

 
   const handleSubmit = async() => {
    const credentials = {
       review, rating, id
     }

    if(!isEditing){
      await dispatch(createReview(credentials));
      await dispatch(getAllRecipeReviews({id, page}));
      dispatch(clearValues())

    } else {
      await dispatch(editReview(credentials))
      await dispatch(getAllRecipeReviews({id, page}))
       dispatch(clearValues())
    }
   } 
 

   useEffect(() => {
    dispatch(clearValues())
    dispatch(setDefaultEdit())
   }, [])


   

  return (
    <div className='leave-review'>
      <h2 className="heading">Leave A Review</h2>
      <p className='subheading'>Share your experience with this recipe to help others</p>

      <div className="user-rating">
        <img src={user.image || defaultUser} alt="user img" />

        <div className="stars">
            {stars.map((item, index) => {
              const value = index + 1;
              
                return <span key={index} className='rating' onClick={(e) => {
                  if(value === rating){
                    dispatch(handleChange({name: e.currentTarget.className, value: null}))
                  } else {
                    dispatch(handleChange({name: e.currentTarget.className, value: value}))
                  }
                console.log(e.currentTarget.className)
                }}>
                  {rating >= value ? <IoMdStar/> : <IoMdStarOutline/>}
                  </span>
            })}
        </div>
      </div>

      <div className="input-container">
            <textarea name='review' value={review} onChange={(e) => dispatch(handleChange({name: e.target.name, value: e.target.value}))}/>
      </div>

      <button className="btn submit-btn" onClick={handleSubmit}>{isEditing ? 'Edit Review' : 'Submit Review'}</button>
    </div>
  )
}

export default LeaveAReview

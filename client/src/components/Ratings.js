import React from 'react'
import { IoMdStarHalf } from 'react-icons/io'
import { IoMdStarOutline } from 'react-icons/io'
import { IoMdStar } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GraphItem from './GraphItem';
import { useEffect } from 'react';
import { getAllRecipeReviews } from '../redux/reviewSlice';
 

const Ratings = () => {
  const dispatch = useDispatch();
  const {overallRating, totalReviews} = useSelector((store) => store.review);
  const array = [5,4,3,2,1]
  const {id} = useParams();

  useEffect(() => {
   console.log(overallRating);
    dispatch(getAllRecipeReviews(id))
  }, [id])

  return (
    <div className="recipe-ratings-container">
      <h2 className="heading">Recipe Ratings</h2>

      <div className='recipe-ratings'>
        <div className="ratings-data">
            <h1>{overallRating || 'N/A'}</h1>
            <div className="stars">
              {array.map((item, index) => {
                const checkNextValue = index + 1;
                return <span key={index} className='star'>
                  {overallRating >= index + 1 ? <IoMdStar/> : overallRating < checkNextValue && overallRating > index ? <IoMdStarHalf/> : <IoMdStarOutline/>}
                  </span>
              })}
            </div>
            <span>({totalReviews || 0}) Total Reviews</span>
        </div>

        <div className="ratings-graph">
          {array.map((item, index) => {
            return <GraphItem key={index} number={item} ></GraphItem>
          })}
        </div>
      </div>
    </div>
  )
}

export default Ratings;
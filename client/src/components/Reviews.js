import React, { useEffect, useState } from 'react'
import defaultUser from '../assets/images/defaultUser.jpeg';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { getAllRecipeReviews, deleteReview, changePage } from '../redux/reviewSlice';
import {Loading, Pagination} from '../components'
import { stars } from '../utils/stars';




const Reviews = () => {
    
  const {id} = useParams();
  const dispatch = useDispatch();
  const {recipeReviews, reviewsLoading, numberOfPages, page} = useSelector((store) => store.review);
  const {user} = useSelector((store) => store.user)
 // const [page, setPage] = useState(1);
  
  useEffect(() => {
    dispatch(getAllRecipeReviews({id, page}))
    console.log('get all recipes')
  }, [id, page])

  useEffect(() => {
    dispatch(changePage(1))
  }, [])

  //handlePage prop

  //onClick
  //setPage(e.target.value)
  //dispatch(changePage(e.target.value))

  const handleDelete = async() => {
    
   console.log('deleting')
   await dispatch(deleteReview(id))
   await dispatch(getAllRecipeReviews({id, page}))
  }


  return (
    <div className='recipe-reviews-container'>
      <div className="heading">Recipe Reviews</div>

      {reviewsLoading ? <div className='mini-loader'><Loading/></div>
       :
      <div className="reviews">
        {recipeReviews.length < 1 ? <h2 className='empty-message'>This recipe hasn't been reviewed yet!</h2>
        : 
        recipeReviews.map((item) => {
          const {_id, userImg, userID:id, name, review, rating} = item;
          return (
          <div className="review-item">

            <div className="review-user-info">
                <img src={userImg || defaultUser} alt="review-user-img" />
                <Link to={`/user/${id}`}><h3>{name}</h3></Link>
                {id === user._id && <button className="delete-review-btn" onClick={handleDelete}>Remove</button>}
            </div>

            <div className="stars">
              {stars.map((item, index) => {
                const value = index + 1;
                return <span className='star'> {value <= rating ? <IoMdStar/> : <IoMdStarOutline/>}</span>
              })}
            </div>

            <p className='review-content'>{review}</p>
          </div>)
        })
        }
       {numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} page={page} handlePage={(e) => dispatch(changePage(Number(e.currentTarget.dataset.id)))}/>}
      </div>
     }
    </div>
  )
}

export default Reviews

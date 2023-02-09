import React from 'react'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const RecipeItem = ({_id:id, category, image, title}) => {


  return (
    <Link to={`/home/recipe/${id}`} className='recipe-item'>
      <div className="img-container"><img src={image} alt="recipe image" /></div>
      <div className="overlay"></div>
      
      <div className="recipe-item-content">
        <div className="info">
             <span className={`${category} category`}>{category}</span>
        </div>
        <h4>{title}</h4>
       
      </div>
    </Link>
  )
}

export default RecipeItem

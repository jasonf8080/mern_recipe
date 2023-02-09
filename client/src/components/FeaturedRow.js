import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RecipeItem from './RecipeItem';
import { HiOutlineChevronRight } from "react-icons/hi2"
import Loading from './Loading';
import { Link } from 'react-router-dom';


const FeaturedRow = ({url, category, color}) => {
    //url, rowName,
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchRecipes = async() => {
        setLoading(true)
        try {
            const response = await axios(`${url}${category}`, {
                headers: {
                    'Content-Type': 'application/json'
                }})
            setRecipes(response.data.recipes.slice(0,5));
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const setLocalStorageItem = () => {

    }

    useEffect(() => {
        fetchRecipes();
    }, [])

    if(loading){
        return <div className="mini-loader"><Loading/></div>
    }

  return (
    <div className="row-container">
        <h2 className='title'>{category}</h2>
        <div className="recipe-row">
            {recipes.map((item, index) => {
                return <RecipeItem key={index} {...item} category={category}/>
            })}
        </div>
        <div className="view-more-btn-container">
            <Link to={`/category/${category}`} className='view-more-btn'><p>View More</p><HiOutlineChevronRight className='icon'/><span></span></Link>
        </div>
    </div>
    
  )
}

export default FeaturedRow

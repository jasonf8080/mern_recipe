import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {Wrapper} from '../assets/styled-wrappers/Category'
import { Loading, Pagination } from '../components';
import RecipeItem from '../components/RecipeItem';
import { categoriesBg } from '../utils/helpers';
const Category = () => {
    //import data from utils,


     const {category} = useParams();
     const navigate = useNavigate();

     const categoryMatch = categoriesBg.find((item) => item.name === category)

    const [loading, setLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(1);

    //const [category, setCategory] = useState('')
    const [page, setPage] = useState(1)

    const fetchRecipesByCategory = async() => {
        setLoading(true)
        try {
            const {data} = await axios.get(`/api/v1/recipes/getRecipes?category=${category}&page=${page}`)
            setRecipes(data.recipes)
            setNumberOfPages(data.numberOfPages)

            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchRecipesByCategory();
    }, [page, category])

    useEffect(() => {
        setPage(1)
    }, [category])

    if(loading){
        return <Loading/>
    }

    if(!categoryMatch){
        return navigate('/home')
    }

  return (
    <Wrapper>
        <div className="img-main-container">
            <div className="overlay"></div>
            <img src={categoryMatch.image} alt='/'/>
            <h1>{categoryMatch.name}</h1>
        </div>

        <div className="container">
            <h2 className='empty-message'>Showing all results for <span>"{category}"</span></h2>

            <div className="responsive-recipes">
                {recipes.map((item, index) => {
                    return <RecipeItem key={index} {...item}/>
                })}
            </div>
            {numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} page={page} handlePage={(e) => setPage(Number(e.currentTarget.dataset.id))}/>}
        </div>
    </Wrapper>
  )
}

export default Category
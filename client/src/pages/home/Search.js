import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BsSearch} from "react-icons/bs";
import { Wrapper } from '../../assets/styled-wrappers/Search';
import RecipeItem from '../../components/RecipeItem';
import { Loading, SearchResults } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearch, getAllRecipes, handleTitle } from '../../redux/recipeSlice';
import {Pagination} from '../../components';



const Search = () => {
  const dispatch = useDispatch();
  //Req Querys
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1)

  const {recipes, numberOfPages, recipesLoading, searchTitle} = useSelector((store) => store.recipe)
  

    const handleChange = (e) => {
      const value = e.target.value;
      setTitle(value)
    }

    const handleSubmit = () => {
      setPage(1)
      dispatch(getAllRecipes({title, page}))
      dispatch(handleTitle(title))
    }

    useEffect(() => {
      dispatch(clearSearch())
      //console.log(numberOfPages)
    }, [])

     useEffect(() => {
        if(title){
            dispatch(getAllRecipes({title, page}))
        }

        console.log(page)
        console.log(typeof page)
     }, [page])



   


  
  return (
   <Wrapper className='container'>
    <div className='input-bar'>
      <input type="text" placeholder='Search for recipes' value={title} onChange={handleChange}/>
      <button className="btn" onClick={handleSubmit}><BsSearch/></button>
    </div>


    <div className="results-container">
      <div className="results">
        {recipesLoading ? <div className="mini-loader"><Loading/></div> :  <SearchResults title={searchTitle} searchResults={recipes} ></SearchResults>}
      </div>
      {numberOfPages > 1 && searchTitle !== '' && <Pagination numberOfPages={numberOfPages} page={page} handlePage={(e) => setPage(Number(e.currentTarget.dataset.id))}/>}
    </div>

    
   </Wrapper>
  )
}

export default Search

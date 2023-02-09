import React from 'react'
import RecipeItem from './RecipeItem'

export const SearchResults = ({title, searchResults}) => {
    console.log(searchResults)
    //if no term
    if(!title){
        return <h2 className='empty-message'>Please enter a term</h2>
    }

    if(title && searchResults.length < 1){
        return <h2 className='empty-message'>No results found with "{title}"</h2>
    }

    //if term and no results
  return (
    <div>
        <h2 className='empty-message'>Showing all results for "{title}"</h2>
        <div className="responsive-recipes">
            {searchResults.map((item, index) => {
                return <RecipeItem key={index} {...item}/>
            })}
        </div>
    </div>
  )
}

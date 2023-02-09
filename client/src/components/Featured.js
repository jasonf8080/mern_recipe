import React, { useEffect } from 'react'
import FeaturedRow from './FeaturedRow';
import { Wrapper } from '../assets/styled-wrappers/Featured';
import axios from 'axios';

const Featured = () => {
    //Map out form rows with props
    const baseURL = '/api/v1/recipes/getRecipes?category=';

    

  return (
    <Wrapper>
       
        <FeaturedRow url={baseURL} category='appetizers'></FeaturedRow>
        <FeaturedRow url={baseURL} category='entrees'></FeaturedRow>
        <FeaturedRow url={baseURL} category='desserts'></FeaturedRow> 
        <FeaturedRow url={baseURL} category='snacks'></FeaturedRow> 
        <FeaturedRow url={baseURL} category='drinks'></FeaturedRow> 
        <FeaturedRow url={baseURL} category='sandwiches'></FeaturedRow> 
        <FeaturedRow url={baseURL} category='seafood'></FeaturedRow> 

        
        {/*<FeaturedRow></FeaturedRow> */}
        {/*<FeaturedRow></FeaturedRow> */}
    </Wrapper>
  )
}

export default Featured

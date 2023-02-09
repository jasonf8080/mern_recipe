import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Hero, Featured } from '../../components'


const Home = () => {
  const {user} = useSelector((store) => store.user);
  const navigate = useNavigate()


  return (
    //All HomePage components go here below

    //Hero
    //Featured
        //Row
        //Row
        //Row
    <>
      <Hero></Hero>
      <Featured></Featured>
      
    </>

  
  )
}


export default Home


//Make Rows component with seperate urls, and each with their own loading component...

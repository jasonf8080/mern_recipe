import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper } from '../assets/styled-wrappers/Hero';
import  homeImg  from '../assets/images/home.webp';


const Hero = () => {

    const {user} = useSelector((store) => store.user)

  return (
    <Wrapper>
      <img src={homeImg} className='bg' alt="HOMEIMG" />
      <div className="overlay"></div>
  
      <div className="text">
         <h1>Hello, {user.name}</h1>
         <p>Let's start with some healthy fresh cooking</p>
      </div>
     
      {/* <button onClick={() => dispatch(logout())}>Logout</button> */}
    </Wrapper>
  )
}

export default Hero

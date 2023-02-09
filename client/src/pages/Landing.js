import React from 'react'
import { Wrapper } from '../assets/styled-wrappers/Landing';
import landing from '../assets/images/landing.webp'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setRegistering } from '../redux/userSlice';


const Landing = () => {
  const dispatch = useDispatch();

  const toggleRegister = (value) => {
    dispatch(setRegistering(value))
  }

  return (
    <Wrapper>
        <div className="img-container">
           <div className="overlay"></div>
            <img src={landing} alt='recipe'/>
        </div>

        <div className='content'>
            <h1>Welcome to Our Kitchen!</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis placeat voluptatibus, ducimus recusandae consectetur dolorem harum sed expedita aliquam. Consequatur ad libero deserunt dolore?</p>
            <div className="btn-container">
                <Link className='btn' to='/register' onClick={() => toggleRegister(true)}>Sign Up</Link>
                <Link className='btn' to='/register' onClick={() => toggleRegister(false)}>Login</Link>
            </div>
        </div>
    </Wrapper>
  )
}



export default Landing

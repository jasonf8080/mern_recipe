import React from 'react'
import Wrapper from '../assets/styled-wrappers/Error'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
const Error = () => {
  return (
    <Wrapper>
        <div className='error-center'>
            <h1 className='error'>404</h1>
            <h3>Oops, The page you are looking for is unavailable!</h3>
            <Link to='/home' className='back-home'><FaChevronLeft className='icon'/>Back to Home</Link>
        </div>
    </Wrapper>

  )
}

export default Error
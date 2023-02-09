import React, { useEffect, useState } from 'react'
import { Wrapper } from '../assets/styled-wrappers/Navbar';
import {HiBars3} from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux';
import { setShowSidebar } from '../redux/userSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import defaultUser from '../assets/images/defaultUser.jpeg'
import { logout } from '../redux/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((store) => store.user)
    const pathname = useLocation().pathname
    const home = pathname === '/home'
    const register = pathname === '/register' || pathname === '/login' || pathname === '/'
   
    


  

    window.addEventListener('scroll', () => {
       const nav = document.querySelector('nav');
      if(window.scrollY < 200 && home){
        nav.style.background = 'transparent';
      } else {
         nav.style.background = '#FF5252';
      }
    })
    

    useEffect(() => {
       const nav = document.querySelector('nav');
      if(!home){
         nav.style.background = '#FF5252';
      } else {
         nav.style.background = 'transparent';
      }
    }, [home])

  
    
  return (
    <div className={register && 'hide-nav'}>
    <Wrapper className={!home && 'nav-secondary'}>
        <button className='nav-toggle' onClick={() => dispatch(setShowSidebar())}><HiBars3/></button>

        <Link to='/home/myProfile' className="nav-credentials">
            <h4>{user && user.name}</h4>
            <img src={user && user.image || defaultUser} alt="user image"  />
        </Link>

       
    </Wrapper>
    </div>
  )
}

export default Navbar

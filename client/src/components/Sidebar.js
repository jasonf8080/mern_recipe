import React, { useEffect } from 'react'
import { Wrapper } from '../assets/styled-wrappers/Sidebar'
import { useSelector } from 'react-redux';
import { sidebarLinks } from '../utils/sidebarLinks';
import defaultUser from '../assets/images/defaultUser.jpeg'
import { Link } from 'react-router-dom'
import { setShowSidebar } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa'
import { logout } from '../redux/userSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const {showSidebar, user} = useSelector((store) => store.user);


  return (
    <Wrapper className={showSidebar ? 'show-sidebar sidebar-container' : 'sidebar-container'}>
        {/* User Image and info /maybe edit link/ */}
        <div className='sidebar'>
        <button className='close-btn' onClick={() => dispatch(setShowSidebar())}><FaTimes/></button>
        <div className="sidebar-user">
            <img src={user && user.image || defaultUser} alt="no user" />
            <p>Hi, {user && user.name}!</p>
            <Link to='/profile' onClick={() => dispatch(setShowSidebar(!showSidebar))}>Edit</Link>
        </div>

        <div className="sidebar-links">
          {sidebarLinks.map((item, index) => {
            return <Link key={index} to={item.link} className='link' onClick={() => dispatch(setShowSidebar(!showSidebar))}>{item.text}</Link>
          })}
          <li onClick={() => dispatch(logout())}>Logout</li>
        </div>

       
        {/* Links */}

        </div>
    </Wrapper>
  )
}

export default Sidebar

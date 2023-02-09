import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store'
import defaultUser from '../assets/images/defaultUser.jpeg' 
import {HiOutlineMail} from 'react-icons/hi'
import {GrLocation} from 'react-icons/gr'

export const MyProfileInfo = ({image, name, lastName, location, email}) => {
    const {user} = useSelector((store) => store.user)// put in parent element and add props -- after: add this component to User.js and add props
  return (
    <div className='profile-main-info'>
        <img src={image || defaultUser}/>
        <div className="content">
            <h2>{name} {lastName}</h2>

             <p>
              <span><GrLocation/></span>
              {location || 'New York'}
              </p>

              <p>
              <span><HiOutlineMail/></span>
              {email || 'New York'}
            </p>
        </div>
    </div>
    //header with image and username and location
  )
}

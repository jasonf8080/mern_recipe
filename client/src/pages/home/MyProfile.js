import React from 'react'
import { MyProfileInfo, MyProfileData } from '../../components'
import Wrapper from '../../assets/styled-wrappers/MyProfile'
import { useSelector } from 'react-redux'

const MyProfile = () => {
   const {user} = useSelector((store) => store.user)
   const {image, name, lastName, location, email } = user
  return (
   <Wrapper>
      <MyProfileInfo image={image} name={name} lastName={lastName} location={location} email={email}/>
      <MyProfileData/>
   </Wrapper>
  )
}

export default MyProfile
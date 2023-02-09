import React, { useEffect, useState } from 'react'
import { Navbar, Sidebar, FormInput, Loading, Modal} from '../components'
import { Wrapper } from '../assets/styled-wrappers/Profile'
import defaultUser from '../assets/images/defaultUser.jpeg'
import { getCurrentUser, updateUser,  handleUserChange, clearUserMessage } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {BsPencil} from 'react-icons/bs'



const Profile = () => {
  const dispatch = useDispatch();
  const {user, loading, message} = useSelector((store) => store.user);
  const [errMessage, setErrMessage] = useState('');
  
   const changeValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        dispatch(handleUserChange({name, value}))
  }



  const handleImage = async(e) => {

    let name = e.target.name;
    let value = e.target.files[0];

    const formData = new FormData();
    formData.append("file", value);
    formData.append("upload_preset", "gapi51kb")
    
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dfefbr680/image/upload', formData);
      //Destructure other items you may need from response, ex: asset_id, etc.
      const {data:{secure_url: image}} = response;
      value = image;
      dispatch(handleUserChange({name, value}))

    } catch (error) {
      setErrMessage(error.response.data.error.message);
    }
  }


  const submitUser = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      image: user.image,
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    }))
  }

  const btnClick = (e) => {
    e.preventDefault();
    const input = e.currentTarget.previousElementSibling;
    input.click();
  }



  return (
    <>
      {message && <Modal message={message} exitFunction={() => dispatch(clearUserMessage())} acceptFunction={() => dispatch(clearUserMessage())}/>}
        <Wrapper className='container'>
          <div className='profile-container'>
            <h1>Account Information</h1>

            <form className="form-flex">
                <div className="img-container">
                    <img src={user.image || defaultUser} alt="default-img" />
                    <input type="file" name='image' className='file-input' onChange={handleImage}/>
                    <button className="upload-img" onClick={btnClick}><BsPencil/></button>
                </div>

                <div className="form-inputs">
                  <FormInput name='name' type='text' value={user.name} changeValue={changeValue}></FormInput>
                  <FormInput name='lastName' type='text' value={user.lastName} changeValue={changeValue}></FormInput>
                  <FormInput name='email' type='email' value={user.email} changeValue={changeValue}></FormInput>
                  <FormInput name='location' type='text' value={user.location} changeValue={changeValue}></FormInput>

                  <button type='submit' className='btn save-changes-btn' disabled={
!user.name ||  !user.email || !user.lastName || !user.location} onClick={submitUser}>Save Changes</button>
                </div>
    
            </form>
           </div>
        </Wrapper>
    </>
  )
}

export default Profile
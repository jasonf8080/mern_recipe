import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FormInput } from '../components';
import { clearValues, handleChange, setRegistering } from '../redux/userSlice';
import { Wrapper } from '../assets/styled-wrappers/Register';
import register from '../assets/images/register.jpg'
import { registerUser, loginUser } from '../redux/userSlice';

import { useNavigate } from 'react-router-dom';
import Icon from '../assets/images/logo.png'

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {name, lastName, location, email, password, registering, authAlert, alertClass, user} = useSelector((store) => store.user)

    const changeValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        dispatch(handleChange({name, value}))
    }



    const toggleRegister = () => {
      if(registering){
        dispatch(setRegistering(false))
      } else {
        dispatch(setRegistering(true))
      }
    }


     const handleSubmit = (e) => {
      
      if(registering){
        const currentUser = {name, lastName, location, email, password}
        dispatch(registerUser(currentUser))
      } else {
        const credentials = {email, password};
        dispatch(loginUser(credentials))
      }
       

      setTimeout(() => {
        dispatch(clearValues())
      }, 3000)
    }

     useEffect(() => {

      if(user){
      setTimeout(() => {
          navigate('/home')
      }, 2500)
      }

     }, [user, navigate])

  return (
   <Wrapper>
    <img src={register} className='bg' alt="" />
    <div className="overlay"></div>

      <div className="register-form">
        <div className='img-flex'>
          <img src={Icon}/>
          <h1>Recipes</h1>
        </div>
    
        <h2>{registering ? 'Register' : 'Login'}</h2>

        <span className={authAlert && `alert-${alertClass}`}>{authAlert}</span>

        <div className="form-inputs">
            {registering && <FormInput name='name' type='text' value={name} changeValue={changeValue}></FormInput>}
            {registering && <FormInput name='lastName' type='text' value={lastName} changeValue={changeValue}></FormInput>}
            {registering && <FormInput name='location' type='text' value={location} changeValue={changeValue}></FormInput>}
            <FormInput name='email' type='email' value={email} changeValue={changeValue}></FormInput>
            <FormInput name='password' type='password' value={password} changeValue={changeValue}></FormInput>
        </div>

        <button type='submit' className='submit-btn' onClick={handleSubmit}>{registering ? 'Register' : 'Login'}</button>

        <div className='toggle-register' onClick={toggleRegister}>
            {registering ? 
            <p>Already have an account? Login</p>
             : 
             <p>Don't have an account yet? Sign Up</p>
            }
        </div>

      </div>
    </Wrapper>
  )
}

export default Register

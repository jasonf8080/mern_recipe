import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedLogin = ({children}) => {

    const {user} = useSelector((store) => store.user);

    if(user){
       return <Navigate to='/home'></Navigate>
    } 

    return children;

}

export default ProtectedLogin
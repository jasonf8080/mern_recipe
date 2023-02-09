import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getCurrentUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import { Loading } from '../components'

const ProtectedDashboard = ({children}) => {
    const dispatch = useDispatch();
    const {user, loading} = useSelector((store) => store.user);


   //On Refresh - Preserve User
   useEffect(() => {
     dispatch(getCurrentUser());
  }, [])


   // useEffect(() => {
   //  if(!user){
   //     return <Navigate to='/register'></Navigate>
   //  }
   // }, [user])

  


    if(loading)  return <div className="main-loader"><Loading/></div>;


    if(!user){
       return <Navigate to='/register'></Navigate>
    } 

    return children;

}

export default ProtectedDashboard

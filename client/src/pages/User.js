import React, { useEffect, useState } from 'react'
import { Loading, MyProfileInfo, MyRecipes, Sort } from '../components'
import { getUserProfile } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getActiveUserRecipes } from '../redux/profileSlice'
import { handleSort } from '../redux/profileSlice'


const User = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {viewUser} = useSelector((store) => store.user);
    const {name, lastName, image, email, location} = viewUser;
    const {activeUserRecipes, loading} = useSelector((store) => store.profile)
    const [sort, setSort] = useState('');

   

    useEffect(() => {
        dispatch(getUserProfile(id))
        console.log('renderingg')
    }, [])



  return (
    <section className='user-section'>
          <div className=''><MyProfileInfo name={name} lastName={lastName} image={image} email={email} location={location}/></div>

          <div className="user-flex">
            <h2 id='user-recipes-title'>{name}'s Recipes</h2>
            <Sort handleSort={(e) => setSort(e.target.value)}></Sort>
            
          </div>

          <div className="recipes-container">
            <MyRecipes action={getActiveUserRecipes({id, sort})} data={activeUserRecipes} sort={sort}/>
          </div>
    </section>
  )
}

export default User

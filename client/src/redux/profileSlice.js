import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'
import { logout } from "./userSlice";
const initialState = {
    userLikes: [],
    userRecipes: [],
    loading: true,
    activeUserRecipes: [],
    sort: '',
}



 export const getAllUserLikes = createAsyncThunk('getAllUserLikes',  async(sort, thunkAPI) => {
     try {
        const {data} = await axios.get(`/api/v1/likes/getAllUserLikes?sort=${sort}`);
        console.log(data)
        return data;

     } catch (error) {
        console.log(error)
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         }
     }
 })

  export const getAllUserRecipes = createAsyncThunk('getAllUserRecipes',  async(sort, thunkAPI) => {
    console.log(sort)
     try {
        const {data} = await axios.get(`/api/v1/recipes/getAllUserRecipes?sort=${sort}`);
        console.log(data)
        return data;

     } catch (error) {
         if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         }
     }
 })


   export const getActiveUserRecipes = createAsyncThunk('getActiveUserRecipes',  async({id, sort}, thunkAPI) => {
    
     try {
        const {data} = await axios.get(`/api/v1/recipes/getActiveUserRecipes/${id}?sort=${sort}`);
        console.log(data)
        return data;

     } catch (error) {
        console.log(error)
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         }
     }
 })



const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        handleSort: (state, action) => {
            const {name, value} = action.payload;
            state[name] = value;
        }
    }, 

    extraReducers:{
        [getAllUserLikes.pending]: (state, action) => {
            state.loading = true
        },

        [getAllUserLikes.fulfilled]: (state, action) => {
            const {newLikes} = action.payload
            console.log(newLikes)
            state.loading = false
            state.userLikes = newLikes;
        },

        [getAllUserLikes.rejected]: (state, action) => {
            
        },




        [getAllUserRecipes.pending]: (state, action) => {
            state.loading = true
        },

        [getAllUserRecipes.fulfilled]: (state, action) => {
            const {recipes} = action.payload
            state.loading = false
            state.userRecipes = recipes;
        },

        [getAllUserRecipes.rejected]: (state, action) => {
            
        },



        [getActiveUserRecipes.pending]: (state, action) => {
            state.loading = true
        },

        [getActiveUserRecipes.fulfilled]: (state, action) => {
            const {recipes} = action.payload
            state.loading = false
            state.activeUserRecipes = recipes;
        },

        [getActiveUserRecipes.rejected]: (state, action) => {
            
        }


        
    }
    
})

export const {handleSort} = profileSlice.actions
export default profileSlice.reducer;
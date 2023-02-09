import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "./userSlice";

import axios from 'axios'
const initialState = {
    activeRecipe: {},
    recipeLoading: true,
    recipesLoading: false,
    reviewsLoading: true,
    recipeSaved: false,
    message: '',
    recipes: [],
    numberOfPages: 0,
    searchTitle: '',
}



export const getAllRecipes = createAsyncThunk( 'getAllRecipes', async({title, page}, thunkAPI) => {
    
    try {
       const {data} = await axios.get(`/api/v1/recipes/getRecipes?title=${title}&page=${page}`);
       return data;

    } catch (error) {
       if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         } else {
             return thunkAPI.rejectWithValue(error.response.data.msg)
         }
       
    }
})

export const getSingleRecipe = createAsyncThunk( 'getSingleRecipe', async(id, thunkAPI) => {
   
    try {
       const {data} = await axios.get(`/api/v1/recipes/getSingleRecipe/${id}`);
       return data.recipe;

    } catch (error) {
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         } else {
             return thunkAPI.rejectWithValue(error.response.data.msg)
         }
       
    }
})

export const checkIfRecipeSaved = createAsyncThunk('checkIfRecipeSaved',  async(credentials, thunkAPI) => {
    //console.log('checking if saved or not')
    try {
       //const {data} = await axios.post('/api/v1/auth/register', currentUser);
       const {data} = await axios.post('/api/v1/recipes/checkLiked', credentials);
      // console.log(data)
       return data;

    } catch (error) {
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         } else {
             return thunkAPI.rejectWithValue(error.response.data.msg)
         }
       
    }
})

export const saveRecipe = createAsyncThunk('saveRecipe',  async(id, thunkAPI) => {
    console.log('running save')
    try {
       //const {data} = await axios.post('/api/v1/auth/register', currentUser);
       const {data} = await axios.post('/api/v1/recipes/saveRecipe', {id});
       //console.log(data);

    } catch (error) {
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         } 
       
    }
})

export const removeSavedRecipe = createAsyncThunk('removeSavedRecipe',  async(id, thunkAPI) => {
  
    try {
       const {data} = await axios.patch('/api/v1/recipes/removeSavedRecipe', {id});
       console.log(data);

    } catch (error) {
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         }
    }
})

export const deleteRecipe = createAsyncThunk('deleteRecipe',  async(id, thunkAPI) => {
  
    try {
       //const {data} = await axios.post('/api/v1/auth/register', currentUser);
       const {data} = await axios.delete(`/api/v1/recipes/deleteRecipe/${id}`);
       console.log(data);
       return data

    } catch (error) {
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         }
       
    }
})










const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        clearMessage: (state, action) => {
            state.message = ''
        }, 

        handleTitle: (state, action) => {
            state.searchTitle = action.payload;
        },

        clearSearch: (state, action) => {
            state.searchTitle = ''
            state.numberOfPages = 0
            state.recipes = []
        },

        beginDelete: (state, action) => {
            state.message = 'Do you wish to delete recipe?'
        }
    }, 
    extraReducers: {
        getAllRecipes,

        [getAllRecipes.pending]: (state, action) => {
            state.recipesLoading = true
        },

        [getAllRecipes.fulfilled]: (state, action) => {
            console.log(action.payload)
            const {recipes, numberOfPages} = action.payload;
            state.recipesLoading = false
            state.recipes = recipes
            state.numberOfPages = numberOfPages
        },

        [getAllRecipes.rejected]: (state, action) => {
            
        },
        
        [getSingleRecipe.pending]: (state, action) => {
            state.recipeLoading = true
        },

        [getSingleRecipe.fulfilled]: (state, action) => {
            console.log(action.payload)
            
            state.recipeLoading = false
            state.activeRecipe = action.payload
     
           
        },

        [getSingleRecipe.rejected]: (state, action) => {
            
        },


        [checkIfRecipeSaved.pending]: (state, action) => {
            state.recipeSaved = false;
        },

        [checkIfRecipeSaved.fulfilled]: (state, action) => {
            state.recipeSaved = action.payload;
        },

        [checkIfRecipeSaved.pending]: (state, action) => {
            state.recipeSaved = false;
        },


        [deleteRecipe.pending]: (state, action) => {
            
        },

        [deleteRecipe.fulfilled]: (state, action) => {
            const {msg} = action.payload;
            state.message = msg;
        },

        [deleteRecipe.rejected]: (state, action) => {
           
        },


 

    }
})

export const {clearMessage, handleTitle, clearSearch, beginDelete} = recipeSlice.actions
export default recipeSlice.reducer;
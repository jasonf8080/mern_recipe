import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'

const initialState = {
    category: null,
    image: null,
    title: '', 
    desc: '',
    ingredients: [],
    steps: [],
    message: '',
}



 export const createRecipe = createAsyncThunk('createRecipe',  async(credentials, thunkAPI) => {
    console.log(credentials)
     try {
        const {data} = await axios.post('/api/v1/recipes/createRecipe', credentials);
        console.log(data)
      //  thunkAPI.dispatch(clearRecipeValues())
        return data;
        //clearValues

     } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data.msg)
     }
 })




const createRecipeSlice = createSlice({
    name: 'createRecipe',
    initialState,
    reducers: {
        handleValue: (state, action) => {
           const {name, value} = action.payload;
            state[name] = value
            
        },

        handleList: (state, action) => {
            console.log(action.payload)
            const {stateName, index, value} = action.payload
            state[stateName][index] = value;
        },

        handleListItemRemove: (state, action) => {
            const {stateName, index} = action.payload
            state[stateName][index] = '';
        },

        clearMessage: (state, action) => {
            state.message = ''
        }, 
    
        clearRecipeValues: (state, action) => {
             state.category = null
             state.image = null
             state.title = '' 
             state.desc = ''
             state.ingredients = []
             state.steps = []
        }
    }, 

    extraReducers:{
         [createRecipe.pending]: (state, action) => {

         },

         [createRecipe.fulfilled]: (state, action) => {
            const {msg} = action.payload;
            state.message = msg
         },

         [createRecipe.rejected]: (state, action) => {
           // state.message = 
           state.message = action.payload
         },
    }
    
})

export const {handleValue, handleList, handleListItemRemove, clearMessage, clearRecipeValues} = createRecipeSlice.actions
export default createRecipeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
   recipeReviews: [],
   totalReviews: 0,
   numberOfPages: 0,
   page: 1,
   overallRating: null,
   groupedRatings: [],
   reviewsLoading: false,
   reviewMessage: '',
   rating: null, 
   review: '',
   isEditing: false,
   reviewActionLoading: false
}

// export const registerUser = createAsyncThunk( 'registerUser', async(currentUser, thunkAPI) => {
//      try {
//         const {data} = await axios.post('/api/v1/auth/register', currentUser);
//         return data;

//      } catch (error) {
//          return thunkAPI.rejectWithValue(error.response.data.msg)
//      }
// })


export const getAllRecipeReviews = createAsyncThunk('getAllRecipeReviews', async({id, page}, thunkAPI) => {
    console.log(id)
    try {
       const {data} = await axios.get(`/api/v1/reviews/getAllRecipeReviews/${id}?page=${page}`);
       return data;
    } catch (error) {
        console.log(error)
    }
})

export const createReview = createAsyncThunk('createReview', async(credentials, thunkAPI) => {
    console.log(credentials)
    try {
       const {data} = await axios.post(`/api/v1/reviews/createReview`, credentials);
       console.log(data)
       return data;
    } catch (error) {
     console.log(error)
       return thunkAPI.rejectWithValue(error.response.data.msg)

        // if(error.response.status === 404){
        //     return thunkAPI.rejectWithValue(r)
        // }
      
    }
})

export const getExistingReview = createAsyncThunk('getExistingReview', async(id, thunkAPI) => {
    try {
       const {data} = await axios.get(`/api/v1/reviews/getExistingReview/${id}`);
       console.log(data)
       return data;
    } catch (error) {
       console.log(error)
    }
})


export const editReview = createAsyncThunk('editReview', async(credentials, thunkAPI) => {
    const {id, rating, review} = credentials
    try {
       const {data} = await axios.patch(`/api/v1/reviews/editReview/${id}`, {rating, review} );
       console.log(data)
       return data;
    } catch (error) {
       console.log(error)
    }
})


export const deleteReview = createAsyncThunk('deleteReview', async(id, thunkAPI) => {
   
    try {
       const {data} = await axios.delete(`/api/v1/reviews/deleteReview/${id}`);
       console.log(data)
       return data;
    } catch (error) {
       console.log(error)
    }
})


const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
       handleChange: (state, action) => {
        const {name, value} = action.payload;
        state[name] = value;
       },

       clearValues: (state, action) => {
        state.rating = null
        state.review = ''
       },

       cancelEdit: (state, action) => {
        state.reviewMessage = ''
        state.rating = null
        state.review = ''
       },

       clearReviewMessage: (state, action) => {
        state.reviewMessage = ''
       },

       setDefaultEdit: (state, action) => {
        state.isEditing = false;
       },

       changePage: (state, action) => {
        state.page = action.payload
       }
       
    }, 

    extraReducers: {
        [getAllRecipeReviews.pending]: (state, action) => {
            state.reviewsLoading = true
        },

        [getAllRecipeReviews.fulfilled]: (state, action) => {
            console.log(action.payload)
            let {reviews, totalReviews, numberOfPages, overallRating, groupedRatings} = action.payload;

            if(overallRating.length < 1){
                overallRating = null
            } else {
                overallRating = overallRating[0].average.toFixed(1)
            }
            
            console.log(action.payload)
            state.reviewsLoading = false
            state.recipeReviews = reviews
            state.numberOfPages = numberOfPages
            state.totalReviews = totalReviews
            state.overallRating = overallRating
            state.groupedRatings = groupedRatings;
        },

        [getAllRecipeReviews.rejected]: (state, action) => {
            
        },



        [createReview.pending]: (state, action) => {
             state.reviewActionLoading =  true
        },

        [createReview.fulfilled]: (state, action) => {
            const {msg} = action.payload;

            state.reviewActionLoading =  false
            state.reviewMessage = msg;
            //state.msg = 'success message -- review added'
            
        },

        [createReview.rejected]: (state, action) => {
            state.reviewActionLoading =  false
            state.reviewMessage = action.payload;
        },

         [deleteReview.pending]: (state, action) => {
            state.reviewActionLoading =  true
        },

        [deleteReview.fulfilled]: (state, action) => {
            const {msg} = action.payload;

            state.reviewActionLoading =  false
            state.reviewMessage = msg;
            //state.msg = 'success message -- review added'
            
        },

        [deleteReview.rejected]: (state, action) => {
           
    
            //state.reviewMessage = action.payload;
        },

        

        [getExistingReview.pending]: (state, action) => {
             state.reviewActionLoading =  true
        },

        [getExistingReview.fulfilled]: (state, action) => {
            state.reviewActionLoading =  false
            state.reviewMessage = '';
            state.rating = action.payload.review.rating;
            state.review = action.payload.review.review;
            state.isEditing = true;

        },

        [getExistingReview.rejected]: (state, action) => {
             state.reviewActionLoading =  false
        },

        [editReview.pending]: (state, action) => {
             state.reviewActionLoading =  true
        },

        [editReview.fulfilled]: (state, action) => {
            const {msg} = action.payload;

            state.reviewActionLoading =  false
            state.isEditing = false;
            state.reviewMessage = msg
        },

        [editReview.rejected]: (state, action) => {
            
        }

    }
})

export const {handleChange, clearValues, cancelEdit, clearReviewMessage, setDefaultEdit, changePage} = reviewSlice.actions
export default reviewSlice.reducer;
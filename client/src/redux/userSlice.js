import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios'
const initialState = {
   name: '',
   email: '',
   lastName: '',
   password: '',
   location: '',
   image: '',
   registering: true,
   authAlert: '', 
   alertClass: '',
   testing: false,
   user: null,
   loading: true,
   showSidebar: false,
   message: '',
   viewUser: {}
}

export const registerUser = createAsyncThunk( 'registerUser', async(currentUser, thunkAPI) => {
     try {
        const {data} = await axios.post('/api/v1/auth/register', currentUser);
        return data;

     } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data.msg)
     }
})

export const loginUser = createAsyncThunk( 'loginUser', async(credentials, thunkAPI) => {
    
     try {
        const {data} = await axios.post('/api/v1/auth/login', credentials);
        return data;

     } catch (error) {
         return thunkAPI.rejectWithValue(error.response.data.msg)
     }
})

export const updateUser = createAsyncThunk('updateUser', async(credentials, thunkAPI) => {
    try {
        const {data} = await axios.patch('/api/v1/auth/updateUser', credentials)
       console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         } else {
             return thunkAPI.rejectWithValue(error.response.data.msg)
         }
    
    }
})

export const getCurrentUser = createAsyncThunk( 'getCurrentUser', async(_, thunkAPI) => {
     try {
        const {data} = await axios.get('/api/v1/auth/getCurrentUser');
        return data;
     } catch (error) {
         if(error.response.data.msg === 'UNAUTHORIZED to perform this action'){
              thunkAPI.dispatch(logout())
         }
     }
})

export const getUserProfile = createAsyncThunk( 'getUserProfile', async(id, thunkAPI) => {
     try {
        const {data} = await axios.get(`/api/v1/auth/getUserProfile/${id}`);
        console.log(data)
        return data;
     } catch (error) {
        return thunkAPI.rejectWithValue()
     }
})



export const logout = createAsyncThunk('logout', async(_, thunkAPI) => {
     await axios.get('/api/v1/auth/logout');
    //  thunkAPI.dispatch(setShowSidebar())
    // thunkAPI.dispatch(getCurrentUser())

})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRegistering: (state, action) => {
            state.registering = action.payload
        },

        handleChange: (state, action) => {
            const {name: property, value} = action.payload;
            state[property] = value
        },

        handleUserChange: (state, action) => {
            const {name: property, value} = action.payload;
            state.user[property] = value
        },

        clearValues: (state) => {
            state.authAlert = ''
        },

        setShowSidebar: (state) => {
            state.showSidebar = !state.showSidebar
        }, 

        clearUserMessage: (state) => {
            state.message = ''
        }
        
        
        
       

    },

    extraReducers:{
        [registerUser.pending]: (state, action) => {
            state.testing = true
        },

        [registerUser.fulfilled]: (state, action) => {
            console.log(action.payload.user)
            state.testing = 'success'
            state.user = action.payload.user;
            state.authAlert = 'User Created, Redirecting...'
            // state.alertClass = 'success'
        },

        [registerUser.rejected]: (state, action) => {
            console.log(action.payload)
            state.authAlert = action.payload;
        },

        [loginUser.pending]: (state, action) => {
            state.testing = true
        },

        [loginUser.fulfilled]: (state, action) => {
            console.log(action.payload.user)
            state.testing = 'success'
            state.user = action.payload.user;
            state.authAlert = 'Login Successful, Redirecting...'
            // state.alertClass = 'success'
        },

        [loginUser.rejected]: (state, action) => {
             // Operation `users.findOne()` buffering timed out after 10000ms
           
            state.authAlert = action.payload;
           
           
        },



        [getCurrentUser.pending]: (state, action) => {
            state.loading = true
        },

        [getCurrentUser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload;
        },

        [getCurrentUser.rejected]: (state, action) => {
            state.loading = false;
            state.user = null;
        },

        [updateUser.pending]: (state, action) => {
            state.loading = true
        },

        [updateUser.fulfilled]: (state, action) => {
        
            const {name, email, lastName, location} = action.payload.user;
            const msg = action.payload.msg;
            state.loading = false
            state.user.name = name
            state.user.email = email
            state.user.lastName = lastName
            state.user.location = location
            state.message = msg
        },

        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.message = action.payload
            
        },


        [logout.fulfilled]: (state, action) => {
            state.user = null;
            state.showSidebar = false
            state.name =  ''
            state.email =  ''
            state.lastName =  ''
            state.password =  ''
            state.location =  ''
        },

         [getUserProfile.pending]: (state, action) => {
          // state.loading = true
        },

        [getUserProfile.fulfilled]: (state, action) => {
           // state.loading = false
            const {user} = action.payload;
            console.log(user)
           
            state.viewUser = user
        },

        [getUserProfile.rejected]: (state, action) => {

            
        },


    }
})

export const {handleChange, handleUserChange, setRegistering, clearValues, setShowSidebar, updateUserImage, clearUserMessage} = userSlice.actions
export default userSlice.reducer;
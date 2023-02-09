import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
   userExists: false,
   list: [],
   checkedList: [],
   item: '',
   editingItem: '',
   newItem: '',
   editingMsg: '',

}



export const checkExistingList = createAsyncThunk('checkExistingList', async(_, thunkAPI) => {
    try {
        const {data} = await axios.get('/api/v1/list/checkExistingList')
       // console.log(data)
        return data
    } catch (error) {
       //thunkAPI.rejectWithValue();
    }
})


export const createList = createAsyncThunk('createList', async(item, thunkAPI) => {
    // console.log(list)
    try {
        const {data} = await axios.post('/api/v1/list/createList', {item})
        console.log(data)
        return data
    } catch (error) {
       //thunkAPI.rejectWithValue();
       console.log(error)
    }
})


export const editList = createAsyncThunk('editList', async(item, thunkAPI) => {
    console.log(item)
    try {
        const {data} = await axios.patch('/api/v1/list/editList', {item})
        console.log(data)
        return data
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg);
       console.log(error)
    }
})


export const checkItem = createAsyncThunk('checkItem', async(item, thunkAPI) => {
    console.log(item)
    try {
        const {data} = await axios.patch('/api/v1/list/checkItem', {item})
        console.log(data)
        return data
    } catch (error) {
       //thunkAPI.rejectWithValue();
       console.log(error)
    }
})

export const uncheckItem = createAsyncThunk('uncheckItem', async(item, thunkAPI) => {
    console.log(item)
    try {
        const {data} = await axios.patch('/api/v1/list/uncheckItem', {item})
        console.log(data)
        return data
    } catch (error) {
       //thunkAPI.rejectWithValue();
       console.log(error)
    }
})


export const editListItem = createAsyncThunk('editListItem', async({editingItem, newItem}, thunkAPI) => {

    try {
        const {data} = await axios.patch('/api/v1/list/editListItem', {editingItem, newItem})
        console.log(data)
        return data
    } catch (error) {
       return thunkAPI.rejectWithValue(error.response.data.msg)
       console.log(error)
    }
})


export const deleteListItem = createAsyncThunk('deleteListItem', async(editingItem, thunkAPI) => {

    try {
        const {data} = await axios.patch('/api/v1/list/deleteListItem', {editingItem})
        console.log(data)
        return data
    } catch (error) {
       //thunkAPI.rejectWithValue();
       console.log(error)
    }
})









const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        updateItem: (state, action) => {
            const {name, value} = action.payload;
            state[name] = value;
        }, 

        addItemToList: (state, action) => {
           // console.log(action.payload);
            state.list = [...state.list, action.payload]

        },

        setEditingItem: (state, action) => {
            console.log(action.payload)
            state.editingItem = action.payload
        },

        clearEditing: (state, action) => {
            state.editingItem = ''
        }, 

         clearMessage: (state, action) => {
            state.editingMsg = ''
        }, 
        
    }, 

    extraReducers:{
        [checkExistingList.pending]: (state, action) => {

        },

        [checkExistingList.fulfilled]: (state, action) => {
            console.log(action.payload)
            const {userList, userExists} = action.payload;
           // console.log(userList[0].list)
            const {list, checkedList} = userList;
            

           // console.log(list, checkedList);
            state.userExists = userExists
            state.list = list || []
            state.checkedList = checkedList || []
        },

        [checkExistingList.rejected]: (state, action) => {
            
        },

        [editList.pending]: (state, action) => {

        },

        [editList.fulfilled]: (state, action) => {
           
        },

        [editList.rejected]: (state, action) => {
            state.editingMsg = action.payload;
        },




        //editListItem
        [editListItem.pending]: (state, action) => {

        },

        [editListItem.fulfilled]: (state, action) => {
            state.editingItem =  ''
        },

        [editListItem.rejected]: (state, action) => {
            state.editingMsg = action.payload;
        },

        //deleteListItem
        //editListItem
        [deleteListItem.pending]: (state, action) => {

        },

        [deleteListItem.fulfilled]: (state, action) => {
            state.editingItem =  ''
        },

        [deleteListItem.rejected]: (state, action) => {
            state.editingMsg = action.payload;
        },

    }
    
})

export const {updateItem, addItemToList, setEditingItem, clearEditing, clearMessage} = listSlice.actions
export default listSlice.reducer;
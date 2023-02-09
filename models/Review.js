import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({

    rating: {
        type: Number,
        required: [true, 'Please provide a rating']
    },

    review: {
        type: String,
    },
    
    userID: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }, 


    userImg: {
        type: String
    },

    name: {
        type: String,
        required: [true, 'Name not defined']
    },



    recipeID : {
        type: mongoose.Types.ObjectId,
        ref: 'Recipe',
        required: true
    }
  
}, {timestamps: true})

export default mongoose.model('Review', ReviewSchema)
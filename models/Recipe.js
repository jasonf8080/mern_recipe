import mongoose from "mongoose";


const RecipeSchema = new mongoose.Schema({
    category: {
        type: String,
    },

    image: {
        type: String, 
        required: [true, 'Please provide recipe image']
    },

    title:{
        type: String, 
        required: [true, 'Please provide a title']
    },

    desc:{
         type: String, 
    },

    ingredients: {
        type: Array,
        required: [true, 'Please provide ingredients list']
    },

    steps: {
        type: Array,
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }, 


    createdByName: {
        type: String
    },

    createdByImage: {
        type: String
    }
})





export default mongoose.model('Recipe', RecipeSchema)



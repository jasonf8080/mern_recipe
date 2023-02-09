import mongoose from "mongoose";


const LikeSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId
    },

    recipeID: {
        type: mongoose.Types.ObjectId
    }

}, {timestamps: true})

export default mongoose.model('Like', LikeSchema)
import mongoose from "mongoose";


const ListSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId
    },

    list: {
        type: Array
    },

    checkedList: {
        type: Array
    }

})

export default mongoose.model('List', ListSchema)
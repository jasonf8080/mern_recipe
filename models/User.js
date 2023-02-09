import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide a name'],
        minLength: 2,
        maxLength: 16,
    },

    lastName: {
       type: String,
        required: [true, 'Please provide a lastname'],
    },



    email:{
        type: String,
        unique: true,
        required: [true, 'Please provide an email address'],
        validate:{
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        }
    },

    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: 6
    },

    image: {
        type: String
    },



    location: {
        type: String,
        required: [true, 'Please provide a location'],
    },

    userLikes: {
        type: Array
    }

})

UserSchema.pre('save', async function(){
    if(!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})


UserSchema.methods.createJWT = function(){
     return jwt.sign({userID: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.EXPIRES_IN})
}


UserSchema.methods.comparePassword = async function(password){
    const passwordMatch = await bcrypt.compare(password, this.password);
    return passwordMatch;
}

export default mongoose.model('User', UserSchema)
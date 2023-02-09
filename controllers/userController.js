import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { attachCookies } from "../utils/attachCookies.js";
import {BadRequestError, NotFoundError} from '../errors/index.js'





const register = async(req, res) => {
    const {name, lastName, location, email, password} = req.body;
    console.log(lastName);

    if(!name || !lastName || !location || !email || !password){
       throw new BadRequestError('Please provide all values')
    }

     const emailAlreadyInUse = await User.findOne({email});
     if(emailAlreadyInUse){
         throw new BadRequestError('Email already in use')
     }

     if(password.length < 6){
        throw new BadRequestError('Password must be atleast 6 characters')
     }

    const user = await User.create({name, lastName, email, password, location});
    const token = user.createJWT();

    attachCookies({res, token})
    
    console.log(req.cookies);

    res.status(201).json({user, token})

    
}

const login = async(req, res) => {
   
    console.log(req.body)

    const {email, password} = req.body;

    if(!email || !password){
        throw new BadRequestError('Please provide all values')
    }

    const user = await User.findOne({email});
    if(!user){
        throw new BadRequestError('User does not exist')
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new BadRequestError('Incorrect password')
    }

    const token = user.createJWT();
    attachCookies({res, token})


     res.status(StatusCodes.OK).json({user})

}

const logout = (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    })
    res.send('Logout User')
}


const updateUser = async(req, res) => {
   
    
  const { image, name, email, lastName, location} = req.body;

  if(!name || !lastName || !email || !lastName || !location){
    throw new BadRequestError('Please provide all fields!')
  }


    const user = await User.findOne({_id: req.user.userID});
    user.image = image;
    user.name = name
    user.email = email
    user.lastName = lastName
    user.location = location

    
    await user.save();

    

    console.log('update user')
    res.status(200).json({user, msg: 'Changes have been saved!'})
}

//




const getCurrentUser = async(req, res) => {
    const {userID} = req.user;
    // console.log(req.user)
    const user = await User.findOne({_id: userID})
    res.status(StatusCodes.OK).json(user);
}

const getUserProfile = async(req, res) => {
    const {id} = req.params;

    const user = await User.findOne({_id: id})
    if(!user){
        throw new NotFoundError('Cant find user with matching id')
    } 

    res.status(StatusCodes.OK).json({user})
}

export {register, login, logout, updateUser, getCurrentUser, getUserProfile}
import { StatusCodes } from "http-status-codes";
import NotFoundError from "../errors/not-found.js";
import Recipe from "../models/Recipe.js";
import User from '../models/User.js'
import Like from "../models/Like.js";
import mongoose from "mongoose";
import UnAuthorizedError from "../errors/unauthorized.js";


const getAllRecipes = async(req, res) => {
   
    const {title, page, category} = req.query;
    //console.log(category)

    const queryObject = {};

    

    if(title){
        queryObject.title = { $regex: title, $options: 'i'}
    }

    if(category){
         queryObject.category = category
    }

   let results =  Recipe.find(queryObject);
   if(!results){
    throw new NotFoundError(`No recipes found with a query of ${title}`)
   }


   
    const limit = 10;
    const skip = (page - 1) * limit

    results = results.limit(limit).skip(skip);

    const totalRecipes = await Recipe.countDocuments(queryObject);
    const numberOfPages = Math.ceil(totalRecipes / limit)

   
    const recipes = await results;
   


    res.status(StatusCodes.OK).json({recipes, totalRecipes, numberOfPages})
}

const getAllCategories = async(req, res) => {
    const recipes = await Recipe.find({});

    let categories = recipes.map((item) => item.category)

    categories = [...new Set(categories), 'other']
    res.status(StatusCodes.OK).json({categories})
}


const getSingleRecipe = async(req, res) => {
    const {id} = req.params;
    console.log(id)

    const recipe = await Recipe.findOne({_id: id})
    if(!recipe){
        throw new NotFoundError(`No recipe found with this id ${id}`)
    }

    const userCreated = await User.findOne({_id: recipe.createdBy})
    console.log(userCreated.name)
    recipe.createdByName = `${userCreated.name} ${userCreated.lastName}`
    recipe.createdByImage = userCreated.image

    res.status(StatusCodes.OK).json({recipe})
}

const saveRecipe = async(req, res) => {
    const {id} = req.body;
    //console.log('user:', req.userID);
    console.log(id)

    const recipe = await Recipe.findOne({_id: id})
    if(!recipe){
        throw new NotFoundError('Recipe not found');
    }

    const user = await User.findOne({_id: req.user.userID})
    if(!user){
        throw new NotFoundError('No user found with this id')
    }

    const like = await Like.create({userID: user._id, recipeID: recipe._id})
    
    res.send('recipe saved');
}


const removeSavedRecipe = async(req, res) => {
    const {id} = req.body;
    console.log(id)

     const like = await Like.findOneAndDelete({userID: req.user.userID, recipeID: id})
     res.send('recipe removed from saved')
}
//Remove from Saved Recipes

const checkIfRecipeSaved = async(req, res) => {
    // console.log('req.body:', req.body)
    const {userID, recipeID} = req.body;
   // console.log(userID, recipeID)
   

    const like = await Like.findOne({userID, recipeID});

    if(!like){
        console.log('no liked yet')
        res.status(StatusCodes.OK).send(false)
    }  else {
        console.log('liked already')
         res.status(StatusCodes.OK).send(true)
    }

}


const getAllUserRecipes = async(req, res) => {
    const {sort} = req.query;

    
    let results =  Recipe.find({createdBy: req.user.userID});
    

    if(sort === 'a-z'){
        results = results.sort('title')
    }

    if(sort === 'z-a'){
        results = results.sort('-title')
    } 
    
    const recipes = await results
    
    res.status(StatusCodes.OK).json({recipes})
}


const createRecipe = async(req, res) => {
    const {image, title, category, ingredients, steps} = req.body;

    if(!image || !category || !title || ingredients.length < 1 || steps.length < 1){
        throw new Error('Please provide all fields')
    }

    const recipe = await Recipe.create({image, title, category, ingredients, steps, createdBy: req.user.userID});

  //  res.status(StatusCodes.CREATED).json({recipe})
    res.status(StatusCodes.CREATED).json({msg: 'Recipe successfully added'})
}

const deleteRecipe = async(req,res) => {
    const {id} = req.params;

    const recipe = await Recipe.findOneAndRemove({_id: id})
    res.status(StatusCodes.OK).json({msg: 'Recipe has successfully been deleted'})
}


const getActiveUserRecipes = async(req, res) => {
    const {id} = req.params;
     const {sort} = req.query;
    console.log(sort);

    let results = Recipe.find({createdBy: id})

    if(sort === 'a-z'){
        console.log('okay')
        results = results.sort('title')
    }

    if(sort === 'z-a'){
        results = results.sort('-title')
    } 
    
    const recipes = await results
    //recipes = recipes.sort(sort)
    
    res.status(StatusCodes.OK).json({recipes})
}

export {getAllRecipes, getAllCategories, getSingleRecipe, saveRecipe, checkIfRecipeSaved, removeSavedRecipe, getAllUserRecipes, createRecipe, deleteRecipe, getActiveUserRecipes}
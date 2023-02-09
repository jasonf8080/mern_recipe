import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFoundError } from "../errors/index.js"
import Recipe from "../models/Recipe.js"
import Review from "../models/Review.js"
import User from "../models/User.js"
import mongoose from "mongoose"


const getAllRecipeReviews = async (req, res) => {
    const {id} = req.params;

    const page = Number(req.query.page) || 1;
    const limit = 4;
    const skip = (page - 1) * limit;

    let results = Review.find({recipeID: id});
    

    let overallRating = await Review.aggregate([
        { $match: {recipeID: mongoose.Types.ObjectId(id)}},
        { $group: {_id: '$recipeID', average:{ $avg: '$rating' } }}
    ]) 

    let groupedRatings = await Review.aggregate([
        { $match: {recipeID: mongoose.Types.ObjectId(id)}},
        { $group: {_id: '$rating', count:{$sum: 1}} },
        { $sort: {'_id': 1}}
    ])
    

    results = results.skip(skip).limit(limit)
    const reviews = await results;

    const totalReviews = await Review.countDocuments({recipeID: id})
    const numberOfPages = Math.ceil(totalReviews / limit)
 


    res.status(StatusCodes.OK).json({reviews, totalReviews, overallRating, groupedRatings, numberOfPages});
}

const createReview = async (req, res) => {
    const {review, rating, id} = req.body;
    //req.user.userID

     const alreadyReviewedByUser = await Review.findOne({userID: req.user.userID, recipeID: id})
    if(alreadyReviewedByUser){
        throw new BadRequestError('You have already reviewed this recipe... Do you wish to edit your review?')
    }

    if(!rating){
        throw new NotFoundError('Please provide a rating in order to process review')
    }

    const user = await User.findOne({_id: req.user.userID});
    if(!user){
        throw new NotFoundError('User not found, cannot process review')
    }

    const recipe = await Recipe.findOne({_id: id});
    if(!recipe){
         throw new NotFoundError('Recipe not found, cannot process review')
    }

    

    const newReview = await Review.create({
        userID: user._id,
        userImg: user.image,
        name: user.name,
        recipeID: recipe._id,
        rating,
        review
    })

    res.status(StatusCodes.CREATED).json({msg: 'Review has been successfully submitted!'})
    
}


const getExistingReview = async(req,res) => {
    const {id} = req.params;
  
    const review = await Review.findOne({userID: req.user.userID, recipeID: id})
    if(!review){
        throw new NotFoundError('Something went wrong, review not found!')
    }
    res.status(StatusCodes.OK).json({review})
    
}


const editReview = async(req, res) => {
    const {id} = req.params;
    const {userID} = req.user;
    const {review, rating} = req.body;

    if(!rating){
        throw new Error("please provide a rating to proceed")
    }


    const existingReview = await Review.findOne({userID, recipeID: id});
    if(!existingReview){
        throw new NotFoundError('Uh oh! something went wrong, you have not reviewed this recipe')
    }

    existingReview.rating = rating
    existingReview.review = review

    await existingReview.save();

    res.status(StatusCodes.OK).json({msg:'Success! Your review has been updated'})
}


const deleteReview = async(req, res) => {
    const {id} = req.params;
    const {userID} = req.user;

    const review = await Review.findOneAndDelete({userID, recipeID: id});
    if(!review){
        console.log('no review found')
    }

    res.status(StatusCodes.OK).json({msg: 'Review has successfully been removed'});
}

export {getAllRecipeReviews, createReview, getExistingReview, editReview, deleteReview}
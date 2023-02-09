
import { StatusCodes } from "http-status-codes";
import Like from "../models/Like.js"
import Recipe from "../models/Recipe.js";

const getAllUserLikes = async(req, res) => {
    const {sort} = req.query;
    const likes = await Like.find({userID: req.user.userID});


    let results = [];
    for(let i = 0; i < likes.length; i++){
        const likeID = likes[i].recipeID;
        
        let recipe = await Recipe.find({_id: likeID});
       
        results.push(recipe)
    }

 
   

    if(sort === 'a-z'){
        results = results.sort((a,b) => {
            return a[0].title.localeCompare(b[0].title)
        })
    }

    if(sort === 'z-a'){
        results = results.sort((a,b) => {
            return b[0].title.localeCompare(a[0].title)
        })
    }

    
    const newLikes = await results

    console.log(newLikes)
    

   




    

    res.status(StatusCodes.OK).json({newLikes})
}


export {getAllUserLikes}
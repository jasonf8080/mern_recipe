import express from 'express';
const app = express();
const router = express.Router();
import { authenticateUser } from '../middleware/auth.js';


//Controllers 
import { getAllRecipes, getAllCategories, getSingleRecipe, saveRecipe, checkIfRecipeSaved, removeSavedRecipe, getAllUserRecipes, createRecipe, deleteRecipe, getActiveUserRecipes } from '../controllers/recipeController.js';

router.route('/getRecipes').get(getAllRecipes);

router.route('/getAllCategories').get(getAllCategories);

router.route('/getSingleRecipe/:id').get(getSingleRecipe);

router.route('/checkLiked').post(authenticateUser, checkIfRecipeSaved);
router.route('/saveRecipe').post(authenticateUser, saveRecipe);
router.route('/removeSavedRecipe').patch(authenticateUser, removeSavedRecipe);


router.route('/getAllUserRecipes').get(authenticateUser, getAllUserRecipes);
router.route('/getActiveUserRecipes/:id').get(authenticateUser, getActiveUserRecipes);


router.route('/createRecipe').post(authenticateUser, createRecipe);

router.route('/deleteRecipe/:id').delete(authenticateUser, deleteRecipe);









export default router;
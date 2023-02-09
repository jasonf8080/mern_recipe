import express from 'express';
const app = express();
const router = express.Router();
import { authenticateUser } from '../middleware/auth.js';



//Controllers 
import {getAllRecipeReviews, createReview, getExistingReview, editReview, deleteReview} from '../controllers/reviewController.js';


router.route('/getAllRecipeReviews/:id').get(getAllRecipeReviews);
router.route('/createReview').post(authenticateUser, createReview);
router.route('/getExistingReview/:id').get(authenticateUser, getExistingReview);
router.route('/editReview/:id').patch(authenticateUser, editReview);
router.route('/deleteReview/:id').delete(authenticateUser, deleteReview);




export default router;
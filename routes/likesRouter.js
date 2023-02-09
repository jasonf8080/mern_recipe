import express from 'express';
const app = express();
const router = express.Router();
import { authenticateUser } from '../middleware/auth.js';



//Controllers 
import { getAllUserLikes } from '../controllers/likeController.js';


router.route('/getAllUserLikes').get(authenticateUser, getAllUserLikes);



export default router;
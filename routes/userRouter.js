import express from 'express';
const app = express();
const router = express.Router();
import rateLimiter from 'express-rate-limit';

import { authenticateUser } from '../middleware/auth.js';

//Controllers 
import { register, login, updateUser, getCurrentUser, logout, getUserProfile } from '../controllers/userController.js';

const apiLimiter = rateLimiter.apply({
    windowMs: 15 * 60 * 1000,
    max: 15, 
    message: 'Too many requests, Please try again in 15 minutes'
})

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

router.route('/getCurrentUser').get(authenticateUser, getCurrentUser)
router.route('/getUserProfile/:id').get(authenticateUser, getUserProfile)
router.route('/logout').get(logout)



export default router;
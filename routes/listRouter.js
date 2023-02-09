import express from 'express';
const app = express();
const router = express.Router();
import { authenticateUser } from '../middleware/auth.js';



//Controllers 
import { checkExistingList, createList, editList, checkItem, uncheckItem, editListItem, deleteListItem} from '../controllers/listController.js';


router.route('/checkExistingList').get(authenticateUser, checkExistingList);
router.route('/createList').post(authenticateUser, createList);
router.route('/editList').patch(authenticateUser, editList);
router.route('/checkItem').patch(authenticateUser, checkItem);
router.route('/uncheckItem').patch(authenticateUser, uncheckItem);
router.route('/editListItem').patch(authenticateUser, editListItem);
router.route('/deleteListItem').patch(authenticateUser, deleteListItem);



export default router;
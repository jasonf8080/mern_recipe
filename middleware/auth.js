import jwt from 'jsonwebtoken';
import { UnAuthorizedError } from '../errors/index.js';

export const authenticateUser = async(req, res, next) => {
     //Preserves the user for getCurrentUser
    const token = req.cookies.token;

    if(!token){
        throw new UnAuthorizedError('UNAUTHORIZED to perform this action')
    }


   //Setup req.user
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);
        req.user = {userID: payload.userID}
        next()
    } catch (error) {
        console.log(error)
       throw new Error('UnauthorizeD to perform this action')
    }
   
}




//now we have to test the cookies token to 
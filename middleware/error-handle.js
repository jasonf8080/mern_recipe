import { StatusCodes } from "http-status-codes"

export const errorHandleMiddleware = (err, req, res, next) => {
    console.log(err.message)

    //Default Error Response
    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again!'
    }


    //Mongoose Errors

    //Fields are not correct
    if(err.name === 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = err.message;
        
        //defaultError.msg = 'Invalid Credentials';
        //defaultError.msg = Object.values(err.errors).map((item) => item.message).join(',')
    }

    //Not a unique value error
   if(err.code && err.code === 11000){
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    //defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`
    defaultError.msg = `Email is already in use!`
   }
   

   res.status(defaultError.statusCode).json({msg: defaultError.msg})

    

}
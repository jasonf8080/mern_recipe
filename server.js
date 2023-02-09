import express from 'express'
const app = express();
import dotenv from 'dotenv';
dotenv.config();


import 'express-async-errors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import cloudinary from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';



//Database
import { connectDB } from './db/connectDB.js';


//Middleware 
import { notFoundMiddleware } from './middleware/not-found.js';
import { errorHandleMiddleware } from './middleware/error-handle.js';

//Routers 
import userRouter from './routes/userRouter.js';
import recipeRouter from './routes/recipeRouter.js'
import reviewRouter from './routes/reviewRouter.js'
import likeRouter from './routes/likesRouter.js'
import listRouter from './routes/listRouter.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use(fileUpload({useTempFiles: true}))
app.use(cookieParser())



app.use('/api/v1/auth', userRouter);
app.use('/api/v1/recipes', recipeRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/likes', likeRouter);
app.use('/api/v1/list', listRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})  


app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)


const port = process.env.PORT || 5000;

app.listen((port), async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        console.log(`Server listening on port ${port}...`)
    } catch (error) {
        console.log(error)
    }
    
})
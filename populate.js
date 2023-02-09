import {readFile} from 'fs/promises';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './db/connectDB.js';
import Recipe from './models/Recipe.js';

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        await Recipe.deleteMany();
        const jsonProducts = JSON.parse(await readFile(new URL('./data.json', import.meta.url)));
        await Recipe.create(jsonProducts);
        console.log('success')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}


start();
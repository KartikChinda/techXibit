import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


// here is what you need to do really, you need to just copy paste this code because nodeJs throws a very weird fucking error and localhost refuses to connect. 
import * as dotenv from 'dotenv';
// basically being used to configure environmental variables and not store sensitive info like passwords in code. 
dotenv.config()





const app = express();

app.use(bodyParser.json({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/posts', postRoutes)


const CONN_URL = `mongodb+srv://kartikChinda11:${process.env.PASS}@techxibit.ze74guf.mongodb.net/`;


const PORT = process.env.PORT || 5000

mongoose.connect(CONN_URL)
    .then(() => app.listen(PORT, () => console.log(`Server up and running on Port ${PORT}`)))
    .catch((error) => console.log(error))



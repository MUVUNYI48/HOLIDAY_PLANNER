import express from 'express'
// import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { routeUser } from './src/routes/routeUser.js';
import tourRouter from './src/routes/index.js';
import routeBooking from './src/routes/routeBooking.js';
dotenv.config()
const PORT=8080


import cors from 'cors'

const app=express();
app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1',tourRouter);
app.use('/api/v1',routeUser);
app.use('/api/v1',routeBooking)


app.listen(PORT,()=>{
    console.log(`the app is listening on the ${PORT}`)
})

mongoose.connect(process.env.DB_CONNECTION_PRO).then((res)=>{
    console.log('database connected');
    })
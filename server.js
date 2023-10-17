import express from 'express'
// import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { routeUser } from './src/routes/routeUser.js';
dotenv.config()
const PORT=8080

const app=express();
app.use(bodyParser.json())
app.use('/routeUser',routeUser);

// http.createServer((req,res)=>{
// console.log(`sever is running on ${PORT}`);
// }).listen(PORT)

// app.get('/',(req,res)=>{
//     res.send("hello world");
// })

app.listen(PORT,()=>{
    console.log(`the app is listening on the ${PORT}`)
})

mongoose.connect(process.env.DB_CONNECTION_PRO).then((res)=>{
    console.log('database connected');
    })